var GameEntity = require('../model/GameEntity');
var Constants = require('./DemoAppConstants');
var Point = require('../model/Point');
var Noise = require('../model/ImprovedNoise');

/**
 File:
 DemoApp.CircleEntity
 Created By:
 Mario Gonzalez
 Project:
 DemoApp
 Abstract:
 This is the base entity for the demo game
 Basic Usage:

 Version:
 1.0
 */
class CircleEntity extends GameEntity {

    constructor(anEntityid, aClientid) {
        super(anEntityid, aClientid);
        this.entityid = anEntityid;
        this.collisionCircle = null;
        this.entityType = Constants.GENERIC_CIRCLE;
        this.nOffset = Math.random() * 2000;
        this.setColor("FFFFFF");
        this.velocity = new Point(0, 0).ZERO();
        this.acceleration = new Point(0, 0).ZERO();
        this.radius = Constants.ENTITY_DEFAULT_RADIUS;
        return this;
    }

    /**
     * Update the entity's view - this is only called on the clientside
     */
    updateView() {
        if (!this.view) return;
        this.view.x = this.position.x - this.radius;
        this.view.y = this.position.y - this.radius;

        var diameter = this.lastReceivedEntityDescription.radius * 2;
        this.view.setSize(diameter, diameter);
        this.view.setFillStyle("#" + this.lastReceivedEntityDescription.color);
    }

    /**
     * Update position of this entity - this is only called on the serverside
     * @param {Number} speedFactor    A number signifying how much faster or slower we are moving than the target framerate
     * @param {Number} gameClock    Current game time in seconds (zero based)
     * @param {Number} gameTick        Current game tick (incrimented each frame)
     */
    updatePosition(speedFactor, gameClock, gameTick) {

        // Modify velocity using perlin noise
        var theta = 0.008;

        var noise = new Noise(this.nOffset + this.position.x * theta, this.nOffset + this.position.y * theta, gameTick * 0.003);
        var angle = noise * 12;
        var speed = 0.2;
        this.acceleration.x += Math.cos(angle) * speed - 0.3;
        this.acceleration.y -= Math.sin(angle) * speed;


        this.velocity.translatePoint(this.acceleration);
        this.velocity.limit(5);
        this.velocity.multiply(0.9);
        this.acceleration.setPos(0, 0);
        this.collisionCircle.position.translatePoint(this.velocity);
        this.position = this.collisionCircle.position.clone();
    }

    tempColor() {
        var that = this;

        clearTimeout(this.timeout);
        this.color = "FF0000";
        this.timeout = setTimeout(function () {
            that.setColor(that.originalColor);
        }, 50);
    }

    /**
     * Deallocate memory
     */
    dealloc() {
        this.collisionCircle.dealloc();
        this.collisionCircle = null;
        //DemoApp.CircleEntity.superclass.dealloc.call(this);
        super.dealloc();
    }

    constructEntityDescription() {
        //return DemoApp.CircleEntity.superclass.constructEntityDescription.call(this) + ',' + this.radius + ',' + this.color;
        super.constructEntityDescription.call(this.radius ,this.color);
    }

    ///// ACCESSORS
    /**
     * Set the CollisionCircle for this game entity.
     * @param aCollisionCircle
     */
    setCollisionCircle(aCollisionCircle) {
        this.collisionCircle = aCollisionCircle;
        this.collisionCircle.setDelegate(this);
        this.collisionCircle.setPosition(this.position.clone());
        this.collisionCircle.setRadius(this.radius);
        this.collisionCircle.collisionMask = 1;
        this.collisionCircle.collisionGroup = 1;
    }
    getCollisionCircle() {
        return this.collisionCircle
    }

    /**
     * Set the color of this entity, a property originalColor is also stored
     * @param aColor
     */
    setColor(aColor) {
        if (!this.originalColor) {
            this.originalColor = aColor;
        }

        this.color = aColor;
    }
    getColor() {
        return this.color
    }
    getOriginalColor() {
        return this.originalColor
    }
}

module.exports = CircleEntity;