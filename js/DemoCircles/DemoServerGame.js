var Constants = require('../model/Constants');
var Noise = require("../model/ImprovedNoise.js");
var AbstractServerGame = require('../core/AbstractServerGame')
var CircleManager = require('../lib/circlecollision/CircleManager');
/**
 File:
 DemoServerGame
 Created By:
 Mario Gonzalez
 Project:
 DemoApp
 Abstract:
 This is a concrete server instance of our game
 Basic Usage:
 DemoServerGame = new DemoApp.DemoServerGame();
 DemoServerGame.start();
 DemoServerGame.explodeEveryone();
 Version:
 1.0
 */
class DemoServerGame extends AbstractServerGame {    

    constructor() {
        super();
        this.collisionManager = null;
        this.setGameDuration(Constants.GAME_DURATION);
        this.setupCollisionManager();
        this.setupRandomField();
        return this;
    }


    /**
     * Map RealtimeMultiplayerGame.Constants.CMDS to functions
     * If ServerNetChannel does not contain a function, it will check to see if it is a special function which the delegate wants to catch
     * If it is set, it will call that CMD on its delegate
     */
    setupCmdMap() {
        this.cmdMap[Constants.CMDS.PLAYER_UPDATE] = this.shouldUpdatePlayer;
    }

    setupCollisionManager() {
        // Collision simulation
        this.collisionManager = new CircleManager();
        this.collisionManager.setBounds(0, 0, Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.collisionManager.setNumberOfCollisionPasses(2);
        this.collisionManager.setNumberOfTargetingPasses(0);
        this.collisionManager.setCallback(this.onCollisionManagerCollision, this);
    }

    /**
     * Called when the collision manager detects a collision
     */
    onCollisionManagerCollision(ci, cj, v) {
        ci.delegate.tempColor();
        cj.delegate.tempColor();
    }

    /**
     * Randomly places some CircleEntities into game
     */
    setupRandomField() {
        //RealtimeMultiplayerGame.model.noise(10, 10, i/total)
        var total = Constants.MAX_CIRCLES;
        for (var i = 0; i < total; i++) {
            var radius = Constants.ENTITY_DEFAULT_RADIUS + Math.random() * 5;
            this.createCircleEntity(radius, this.getNextEntityID(), Constants.SERVER_SETTING.CLIENT_ID);
        }
    }

    /**
     * Helper method to create a single CircleEntity
     * @param {Number} aRadius
     * @param {Number} anEntityid
     * @param {Number} aClientid
     */
    createCircleEntity(aRadius, anEntityid, aClientid) {
        // Create a randomly sized circle, that will represent this entity in the collision manager
        var collisionCircle = new RealtimeMultiplayerGame.modules.circlecollision.PackedCircle();
        collisionCircle.setRadius(aRadius);

        // Create the GameEntity
        var circleEntity = new DemoApp.CircleEntity(anEntityid, aClientid);
        circleEntity.radius = aRadius;
        circleEntity.position.set(Math.random() * Constants.GAME_WIDTH, Math.random() * Constants.GAME_HEIGHT);
        circleEntity.setCollisionCircle(collisionCircle);

        // Place the circle and collision circle into corresponding containers
        this.collisionManager.addCircle(circleEntity.getCollisionCircle());
        this.fieldController.addEntity(circleEntity);

        circleEntity.entityType = Constants.ENTITY_TYPES.GENERIC_CIRCLE;
        return circleEntity;
    }

    createPlayerEntity(anEntityid, aClientid) {
        // Create the GameEntity
        var playerEntity = new DemoApp.PlayerEntity(anEntityid, aClientid);
        playerEntity.position.set(Math.random() * Constants.GAME_WIDTH, Math.random() * Constants.GAME_HEIGHT);

        var collisionCircle = new RealtimeMultiplayerGame.modules.circlecollision.PackedCircle();
        collisionCircle.setRadius(playerEntity.radius);

        playerEntity.setInput(new RealtimeMultiplayerGame.Input.Keyboard());
        playerEntity.setCollisionCircle(collisionCircle);

        // place player on field
        this.collisionManager.addCircle(playerEntity.getCollisionCircle());
        this.fieldController.addPlayer(playerEntity);

        return playerEntity;
    }

    /**
     * Updates the game
     * Creates a WorldEntityDescription which it sends to NetChannel
     */
    tick() {
        // Use both the BOUNDARY_WRAP_X flag, and the BOUNDARY_CONSTRAIN_Y flags as the rule
        var boundsRule = RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_WRAP_X;
        boundsRule |= RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_CONSTRAIN_Y;

        this.collisionManager.handleBoundaryForAllCircles(boundsRule);
        this.collisionManager.handleCollisions();

        // Note we call superclass's implementation after we're done
        super.tick();
    }

    shouldAddPlayer(aClientid, data) {
        this.createPlayerEntity(this.getNextEntityID(), aClientid);
    }

    shouldUpdatePlayer(aClientid, data) {
        var entity = this.fieldController.getEntityWithid(data.payload.entityid);
        entity.input.deconstructInputBitmask(data.payload.input);
    }

    shouldRemovePlayer(aClientid) {
        super.shouldRemovePlayer(aClientid);
        console.log("DEMO::REMOVEPLAYER");
    }
};

module.exports = DemoServerGame;