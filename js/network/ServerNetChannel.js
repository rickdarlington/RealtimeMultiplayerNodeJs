var Constants = require('../model/Constants');
var SortedLookupTable = require('../lib/SortedLookupTable');
var Client = require('./Client');
var NetChannelMessage = require('../model/NetChannelMessage');
/**
 File:
 ServerNetChannel.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This class is responsible for managing the socket connection for each client

 -> ClientNetChannel talks to this object
 <--> ServerNetChannel talks to it's GameController via delegation
 <-- ServerNetChannel broadcast the message to all clients

 Basic Usage:
 TODO: UPDATE USAGE
 */
class ServerNetChannel {
    /**
     * Creates a new ServerNetChannel instance
     * @param {RealtimeMultiplayerGame.network.ServerNetChannelDelegateProtocol} aDelegate A delegate that conforms to RealtimeMultiplayerGame.network.ServerNetChannelDelegateProtocol
     */
    constructor(aDelegate) {
        this.outgoingSequenceNumber = 0;		// A unique ID for each message
        this.cmdMap = {};
        this.nextClientID = Constants.SERVER_SETTING.CLIENT_ID;
        this.clients = new SortedLookupTable();

        this.setDelegate(aDelegate);
        this.setupSocketIO();
        this.setupCmdMap();
        return this;
    };

    // Methods
    /**
     * Initializes socket.io
     */
    setupSocketIO () {
        var server = require('http').createServer(function (req, res) {
        });
        server.listen(Constants.SERVER_SETTING.SOCKET_PORT);
        this.socketio = require('socket.io')({
            transports  : [ 'websocket' ],
        })

        this.socketio.listen(server);

        var that = this;

        this.socketio.on('connection', function (socket) {
            console.log(socket);
            that.onSocketConnection(socket)

            socket.on('message', function (data) {
                console.log(data)
                that.onSocketMessage(data, socket)
            });
            socket.on('disconnect', function () {
                console.log("disconnecting...");
                that.onSocketClosed(socket)
            });
        });
    }

    setupWSServer () {

        var profiler = require('v8-profiler');
        var util = require('util');
        var ws = require("../lib/bonsai-ws/ws.js");

        this.clientCount = 0;
        this.maxClients = 8;
        this.maxChars = 128;
        this.socketClients = [];
        var that = this;

        this.$ = new ws.Server(false);
        this.$.onConnect = function (conn) {
            var aClient = new Client(conn, that.getNextClientID());

            // Send the first message back to the client, which gives them a clientid
            var connectMessage = new NetChannelMessage(++this.outgoingSequenceNumber, aClient.getClientid(), true, Constants.CMDS.SERVER_CONNECT, { gameClock: that.delegate.getGameClock() });
            connectMessage.messageTime = that.delegate.getGameClock();
            
            console.log("sending to connecting client: ");
            console.log(connectMessage);
            aClient.getConnection().json.send(connectMessage);

            // Add to our list of connected users
            that.clients.setObjectForKey(aClient, aClient.getSessionId());
        };

        this.$.onMessage = function (conn, msg) {
            console.log("MESSAGE RECEIVED", msg);
        };

        this.$.onClose = function (conn) {
            that.removeClient(conn.$clientID);
            console.log("Disconnected!");
        };

        this.removeClient = function (id) {
            if (this.socketClients[id]) {
                this.clientCount--;
                this.socketClients[id].remove();
                delete this.socketClients[id];
            }
        };

        this.$.listen(Constants.SERVER_SETTING.SOCKET_PORT);
    }

    /**
     * Map RealtimeMultiplayerGame.Constants.CMDS to functions
     */
    setupCmdMap () {
        this.cmdMap[Constants.CMDS.PLAYER_JOINED] = this.onPlayerJoined;
        this.cmdMap[Constants.CMDS.SERVER_FULL_UPDATE] = this.onUpdateRequest;
    }
    
    /**
     * Checks all the clients to see if its ready for a new message.
     * If they are, have the client perform delta-compression on the worldDescription and send it off.
     * @param gameClock       The current (zero-based) game clock
     * @param worldDescription A description of all the entities currently in the world
     */
    tick (gameClock, worldDescription) {
        var worldEntityDescriptionString = worldDescription.getEntityDescriptionAsString();
        var entityDescriptionObject = {
            entities: worldEntityDescriptionString,
            gameClock: worldDescription.gameClock,
            gameTick: worldDescription.gameTick
        };

        // Send client the current world info
        this.clients.forEach(function (key, client) {
            // Collapse delta - store the world state
            client.entityDescriptionBuffer.push(entityDescriptionObject);

            // Ask if enough time passed, and send a new world update
            if (client.canSendMessage(gameClock)) {
                client.sendQueuedCommands(gameClock);
            }

        }, this);
    }

    // Socket.IO callbacks
    /**
     * Callback from socket.io when a client has connected
     * @param clientConnection
     */
    onSocketConnection (clientConnection) {

        var aClient = new Client(clientConnection, this.getNextClientID());

        // Send the first message back to the client, which gives them a clientid
        var connectMessage = new NetChannelMessage(++this.outgoingSequenceNumber, aClient.getClientid(), true, Constants.CMDS.SERVER_CONNECT, { gameClock: this.delegate.getGameClock() });
        connectMessage.messageTime = this.delegate.getGameClock();
        aClient.getConnection().json.send(connectMessage);

        // Add to our list of connected users
        this.clients.setObjectForKey(aClient, aClient.getSessionId());
    }

    /**
     * Callback from socket.io when a client has disconnected
     * @param client
     */
    onSocketClosed (clientConnection) {
        var client = this.clients.objectForKey(clientConnection.sessionId);
        if (!client) {
            console.warn("(ServerNetChannel)::onSocketClosed - ERROR - Attempting to remove client that was not found in our list! ");
            return;
        }

        this.delegate.shouldRemovePlayer(client.getClientid());
        this.clients.remove(clientConnection.sessionId);
        client.dealloc();

    }

    /**
     * Callback from socket.io when a ClientNetChannel has sent us a message
     * @param data
     * @param connection
     */
    onSocketMessage (data, connection) {
        var client = this.clients.objectForKey(connection.sessionId);
        //that.CMD_TO_FUNCTION[decodedMessage.cmds.cmd].apply(that, [connection, decodedMessage]);

        // Allow the client to track that data was received
        if (client) {
            client.onMessage(data);
        } else {
            console.log("(NetChannel)::onSocketMessage - no such client!");
            return;
        }

        //// Call the mapped function, always pass the connection. Also pass data if available
        if (this.cmdMap[data.cmd]) {
            this.cmdMap[data.cmd].call(this, client, data);
        } else if (this.delegate.cmdMap[data.cmd]) { // See if delegate has function mapped
            this.delegate.cmdMap[data.cmd].call(this.delegate, client, data);
        } else { // Display error
            console.log("(NetChannel)::onSocketMessage SERVER could not map '" + data.cmd + "' to function!");
        }
    }

    ////// Game callbacks
    /**
     * Callback for when a player has joined the match.
     * Note that joining the match, happens after connecting.
     * For example a player might be able to connect to the match, and watch the game for a while then want to join the match
     * @param client
     * @param data
     */
    onPlayerJoined (client, data) {
        console.log(client.getClientid() + " joined the game!");
        console.log(client);
        this.delegate.shouldAddPlayer(client.getClientid(), data);
        client.getConnection().json.send(data);
    }
    
    onUpdateRequest(client, data) { 
           
    }

    /*************
     * ACCESSORS *
     *************/


    getNextClientID () {
        return ++this.nextClientID;
    }

    /**
     * Checks that an object contains the required methods and sets it as the delegate for this ServerNetChannel instance
     * @param {RealtimeMultiplayerGame.network.ServerNetChannelDelegateProtocol} aDelegate A delegate that conforms to RealtimeMultiplayerGame.network.ServerNetChannelDelegateProtocol
     */
    setDelegate (aDelegate) {
        //skip validating, just make sure your delegate conforms or stuff will blow up.
        this.delegate = aDelegate;
    }
}

module.exports = ServerNetChannel;
