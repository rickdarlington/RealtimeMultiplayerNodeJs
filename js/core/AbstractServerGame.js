var AbstractGame = require('./AbstractGame');
var WorldEntityDescription = require('../model/WorldEntityDescription');
var ServerNetChannel = require('../network/ServerNetChannel');
/**
 File:
 AbstractServerGame.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This class is the base Game controller in RealtimeMultiplayerGame on the server side.
 It provides things such as dropping players, and contains a ServerNetChannel
 Basic Usage:
 [This class is not instantiated! - below is an example of using this class by extending it]

 (function(){
		MyGameClass = function() {
			return this;
 		}

		RealtimeMultiplayerGame.extend(MyGameClass, RealtimeMultiplayerGame.AbstractServerGame, null);
	};
 */
var cmdMap = {};        				// Map the CMD constants to functions
var nextEntityID = 0;					// Incremented for everytime a new object is created}
    
class AbstractServerGame extends AbstractGame {
    
    constructor() {
        super();
        this.intervalFramerate += 6;
        this.cmdMap = {};
        return this;
    }


        // Methods
        setupNetChannel() {
            this.netChannel = new ServerNetChannel(this);
        }

        /**
         * Map RealtimeMultiplayerGame.Constants.CMDS to functions
         * If ServerNetChannel does not contain a function, it will check to see if it is a special function which the delegate wants to catch
         * If it is set, it will call that CMD on its delegate
         */
        setupCmdMap() {
            super.setupCmdMap();
//			this.cmdMap[RealtimeMultiplayerGame.Constants.CMDS.PLAYER_UPDATE] = this.shouldUpdatePlayer;
            // These are left in as an example
//			this.cmdMap[RealtimeMultiplayerGame.Constants.CMDS.PLAYER_JOINED] = this.onPlayerJoined;
//			this.cmdMap[RealtimeMultiplayerGame.Constants.CMDS.PLAYER_DISCONNECT] = this.onPlayerDisconnect;
        }

        /**
         * Updates the gameworld
         * Creates a WorldEntityDescription which it sends to NetChannel
         */
        tick() {
            super.tick();

            // Allow all entities to update their position
            this.fieldController.getEntities().forEach(function (key, entity) {
                entity.updatePosition(this.speedFactor, this.gameClock, this.gameTick);
            }, this);

            // Create a new world-entity-description,
            var worldEntityDescription = new WorldEntityDescription(this, this.fieldController.getEntities());
            this.netChannel.tick(this.gameClock, worldEntityDescription);

            if (this.gameClock > this.gameDuration) {
                this.shouldEndGame();
            }
        }

        shouldUpdatePlayer(client, data) {
            console.log("(AbstractServerGame)::onPlayerUpdate");
        }

        shouldRemovePlayer(clientid) {
            this.fieldController.removePlayer(clientid);
        }

        shouldEndGame() {
            console.log("(AbstractServerGame)::shouldEndGame");
        }


        ///// Accessors
        getNextEntityID() {
            return ++this.nextEntityID;
        }
}

module.exports = AbstractServerGame;