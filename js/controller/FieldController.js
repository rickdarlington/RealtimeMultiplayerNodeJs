var SortedLookupTable = require('../lib/SortedLookupTable');

class FieldController {
    
    constructor() {
        this.entities = new SortedLookupTable();
        this.players = new SortedLookupTable();
    };

    /**
     * Update all entities
     * @param {Number} speedFactor    A number signifying how much faster or slower we are moving than the target framerate
     * @param {Number} gameClock    Current game time in seconds (zero based)
     * @param {Number} gameTick        Current game tick (incrimented each frame)
     */
    tick (speedFactor, gameClock, gameTick) {
        // DO SOME STUFF
    }

    /**
     * Internal function. Adds an entity to our collection, and adds it to the view if we have one
     * @param anEntity    An entity to add, should already be created and contain a unique entityid
     */
    addEntity (anEntity) {
        this.entities.setObjectForKey(anEntity, anEntity.entityid);

        // If we have a view, then add the player to it
        if (this.view) {
            this.view.addEntity(anEntity.getView());
        }

    }

    /**
     * Updates the entity based on new information (called by AbstractClientGame::renderAtTime)
     * @param {int}        entityid    entityid we want to update
     * @param {RealtimeMultiplayerGame.model.Point}    newPosition    position
     * @param {Number}    newRotation    rotation
     * @param {Object}    newEntityDescription The full contents of the the snapshots newEntityDescription
     */
    updateEntity (entityid, newPosition, newRotation, newEntityDescription) {
        var entity = this.entities.objectForKey(entityid);

        if (entity != null) {
            entity.position.x = newPosition.x;
            entity.position.y = newPosition.y;
            entity.rotation = newRotation;
            entity.lastReceivedEntityDescription = newEntityDescription;
        } else {
            debugger;
            console.log("(FieldController)::updateEntity - Error: Cannot find entity with entityid", entityid);
        }
    }

///// Memory

    addPlayer (aPlayerEntity) {
        this.addEntity(aPlayerEntity);
        this.players.setObjectForKey(aPlayerEntity, aPlayerEntity.clientid);
    }

    /**
     * Remove a player.
     * Does player stuff, then calls removeEntity.
     * @param clientid    ConnectionID of the player who jumped out of the game
     */
    removePlayer (clientid) {
        var player = this.players.objectForKey(clientid);
        if (!player) {
            console.log("(FieldController), No 'Character' with clientid " + clientid + " ignoring...");
            return;
        }

        this.removeEntity(player.entityid);
        this.players.remove(player.clientid);
    }


    /**
     * Removes an entity by it's ID
     * @param entityid
     */
    removeEntity (entityid) {
        var entity = this.entities.objectForKey(entityid);

        if (this.view)
            this.view.removeEntity(entity.view);

        entity.dealloc();
        this.entities.remove(entityid);
    }

    /**
     * Checks an array of "active entities", against the existing ones.
     * It's used to remove entities that expired in between two updates
     * @param activeEntities
     */
    removeExpiredEntities (activeEntities) {
        var entityKeysArray = this.entities._keys;
        var i = entityKeysArray.length;
        var key;
        var totalRemoved = 0;

        while (i--) {
            key = entityKeysArray[i];

            // This entity is still active. Move along.
            if (activeEntities[key])
                continue;

            // This entity is not active, check if it belongs to the server
            var entity = this.entities.objectForKey(key);
            var isPlayer = this.players.objectForKey(entity.clientid) != null;


            // Remove special way if player (which calls removeEntity on itself as well), or just remove it as an entity
            if (isPlayer) {
                this.removePlayer(entity.clientid);
            } else {
                this.removeEntity(entity.entityid);
            }

            totalRemoved++;
        }

    }

    dealloc () {
        this.players.forEach(function (key, entity) {
            this.removePlayer(entity.clientid);
        }, this);
        this.players.dealloc();
        this.players = null;

        this.entities.forEach(function (key, entity) {
            this.removeEntity(entity.entityid);
        }, this);
        this.entities.dealloc();
        this.entities = null;


        this.view = null;
    }

///// Accessors
    // Will be called on client side
    setView (aView) {
        this.view = aView;
    }
    getView () {
        return this.view
    }
    getEntities () {
        return this.entities
    }
    getPlayers () {
        return this.players;
    }
    getEntityWithid (anEntityid) {
        return this.entities.objectForKey(anEntityid);
    }
    getPlayerWithid (aClientid) {
        return this.players.objectForKey(aClientid);
    }
};


module.exports = FieldController;