var constants = require('../model/Constants');
var SortedLookupTable = require('../lib/SortedLookupTable');
/**
 File:
 Client.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 Stores information about a connection to a client
 Basic Usage:
 var aNewClient = new Client(this, connection, false);

 // Add to our list of connected users
 this.clients[clientid] = aNewClient;

 // broadcast message to all clients
 for( var clientid in this.clients ) {
		this.clients[clientid].sendMessage(encodedMessage);
	}
 */
class Client {

    constructor(aConnection, aClientid) {
        this.connection = null,				// SocketIO connection for this specific client
        this.clientid = -1,				// UUID for this client
        // Configuration
        this.cl_updateRate = constants.CLIENT_SETTING.UPDATE_RATE,		// How often we can receive messages per sec
        this.outgoingMessageBuffer = [],				// Store array of incoming messages, slots are resused
        this.outgoingSequenceNumber = 0,                // Number of total outgoing messages received
        this.incomingMessageBuffer = [],              	// Store array of incoming messages, slots are resused
        this.incomingSequenceNumber = 0,                // Number of total incoming messages received
        this.entityDescriptionBuffer = [],				// Store WorldEntityDescriptions before ready to send

        // Used to track if we can send a new message to this user
        this.lastSentMessageTime = -1,
        this.lastReceivedMessageTime = -1,

        // Entries that have not changed since the last frame
        this.stagnantEntities = null,
        
        this.clientid = aClientid;
        this.connection = aConnection;

        if (!this.connection.sessionId) { // No sessionId variable means we're not using socket.io - just set that property to use our clientid
            this.connection.sessionId = aClientid;
        }

        this.stagnantEntities = new SortedLookupTable();
        return this;
    }

    onMessage (messageData) {

        var messageIndex = this.incomingSequenceNumber & constants.CLIENT_SETTING.UPDATE_RATE;
//			this.incomingMessageBuffer[messageIndex] = messageData;
        this.incomingSequenceNumber++;
    }

    dealloc () {
        this.outgoingMessageBuffer = null;
        this.incomingMessageBuffer = null;
        this.entityDescriptionBuffer = null;
        this.stagnantEntities.dealloc();
        this.stagnantEntities = null;
        this.connection.removeAllListeners();
        this.connection = null;
    }

    /**
     * Compares the worldDescription to the last one we sent - removes unchanged values
     * @param worldDescription A description of all the entities currently in the world
     * @param gameClock           The current (zero-based) game clock
     */
    compressDeltaAndQueueMessage (worldDescription, gameClock) {
        var allEntities = worldDescription.entities,
            len = allEntities.length;

        var resultDescStr = '';
        while (len--) {
            var anEntityDescStr = allEntities[len],
                anEntityDesc = anEntityDescStr.split(','),
                entityid = +anEntityDesc[0],
                clientid = +anEntityDesc[1];


            var hasNewData = true;
            if (clientid == constants.SERVER_SETTING.CLIENT_ID) {
                var previouslySentEntityDescription = this.stagnantEntities.objectForKey(entityid);
                if (previouslySentEntityDescription) {
                    // hasNewData = false;
                }
            }

            // Store for next time
            //this.stagnentEntities.setObjectForKey(anEntityDesc, entityid);

            // Only send if it has new data
            if (hasNewData) {
                resultDescStr += "|" + anEntityDescStr;
            }
        }
        var entityDescriptionObject = {};
        entityDescriptionObject.entities = resultDescStr;
        entityDescriptionObject.gameClock = worldDescription.gameClock;
        entityDescriptionObject.gameTick = worldDescription.gameTick;

        this.entityDescriptionBuffer.push(entityDescriptionObject);
    }

    /**
     * Sends the current cmdBuffer
     */
    sendQueuedCommands (gameClock) {
        var messageContent = {
            gameClock: gameClock,
            id: constants.SERVER_SETTING.CLIENT_ID,
            seq: this.outgoingSequenceNumber,
            cmd: constants.CMDS.SERVER_FULL_UPDATE,
            data: this.entityDescriptionBuffer
        };
        var anEncodedMessage = messageContent;	// Encode?

        this.sendMessage(anEncodedMessage, gameClock);

        this.entityDescriptionBuffer = [];
    }

    /**
     * Send an encoded (and delta compressed) message to the connection
     * @param anEncodedMessage Bison Encoded message
     * @param gameClock           The current (zero-based) game clock
     */
    sendMessage (anEncodedMessage, gameClock) {
//			anEncodedMessage = RealtimeMultiplayerGame.modules.bison.encode(anEncodedMessage)
        this.lastSentMessageTime = gameClock;

        // Store inside our outgoingMessageBuffer - which holds 'MESSAGE_BUFFER_MASK' lerped number of messages
//			var messageIndex = this.outgoingSequenceNumber & BUFFER_MASK;
//			this.outgoingMessageBuffer[messageIndex] = anEncodedMessage;

        // Send and increment our message count
        this.connection.json.send(anEncodedMessage);
        this.outgoingSequenceNumber++;
    }

///// MEMORY


///// ACCESSORS
    /**
     * Returns true if its ok to send this client a new message
     * @param {Number} gameClock
     */
    canSendMessage (gameClock) {
        return (gameClock - this.lastSentMessageTime) > this.cl_updateRate;
    }

    /**
     * Returns the sessionId as created by Socket.io for this client
     * @return {String} A hash representing the session id
     */
    getSessionId () {
        return this.connection.sessionId;
    }

    /**
     * UUID given to us by ServerNetChannel
     * This is used instead of sessionid since we send this around a lot and sessionid is a 12 digit string
     */
    getClientid () {
        return this.clientid;
    }

    /**
     * @return {
	 */
    getConnection () {
        return this.connection;
    }
}

module.exports = Client;