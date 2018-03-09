var Constants = require('./DemoAppConstants');
var CircleEntity = require('./CircleEntity');
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
class PlayerEntity extends CircleEntity{
    constructor(anEntityid, aClientid) {
        super(anEntityid, aClientid);
        this.entityType = Constants.PLAYER_ENTITY;
        this.input = null;
        this.radius = 40;
        return this;
    };

    updateView() {
        super.updateView();
    }

    setInput(input) {
        this.input = input;
    }

    updatePosition() {
        var moveSpeed = 1.5;
        // Horizontal accelertheation
        if (this.input.isLeft()) this.acceleration.x -= moveSpeed;
        if (this.input.isRight()) this.acceleration.x += moveSpeed;

        // Vertical movement
        if (this.input.isUp()) this.acceleration.y -= moveSpeed;
        if (this.input.isDown()) this.acceleration.y += moveSpeed;

        this.velocity.translatePoint(this.acceleration);
        this.velocity.limit(5);
        this.velocity.multiply(0.85);
        this.acceleration.set(0, 0);
        this.collisionCircle.position.translatePoint(this.velocity);
        this.position = this.collisionCircle.position.clone();
    }

    setCollisionCircle(aCollisionCircle) {
        super.setCollisionCircle(aCollisionCircle);
        //	this.collisionCircle.setIsFixed( true );
    }

    /**
     * Deallocate memory
     */
    dealloc() {
        if (this.input) {
            this.input.dealloc();
            delete this.input;
        }
        super.dealloc();
    }
}

module.exports = PlayerEntity;