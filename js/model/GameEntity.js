var Point = require('./Point');
var Constants = require('../DemoCircles/DemoAppConstants');

/**
 File:
 GameEntity.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This class is the base GameEntity class in RealtimeMultiplayerGame, it contains a position rotation, health
 Basic Usage:

 var badGuy = new RealtimeMultiplayerGame.GameEntity();
 badGuy.position.x += 1;
 */
class GameEntity {

    constructor(anEntityid, aClientid) {
        this.clientid = -1;									// Owner of this object
        this.entityid = -1;									// UUID for this entity
        this.entityType = -1;								// A special interger representing the entityType sent via along with other network info
        this.rotation = 0;
        this.traits = null;									// An array of our traits; in reverse added order
        this.view = null;
        this.lastReceivedEntityDescription = null;			// The last received entity description (set by renderAtTime)

        this.radius = 40;
        this.clientid = aClientid;
        this.entityid = anEntityid;
        this.traits = [];
        this.position = new Point(0, 0);
        this.entityType = Constants.UNKNOWN;
        return this;
    };

    /**
     * Update the view's position
     */
    updateView() {
        // OVERRIDE
    }

    /**
     * Updates the position of this GameEntity based on it's movement properties (velocity, acceleration, damping)
     * @param {Number} speedFactor    A number signifying how much faster or slower we are moving than the target framerate
     * @param {Number} gameClock    Current game time in seconds (zero based)
     * @param {Number} gameTick        Current game tick (incrimented each frame)
     */
    updatePosition(speedFactor, gameClock, gameTick) {
        // OVERRIDE
    }

    /**
     * Construct an entity description for this object, it is essentually a CSV so you have to know how to read it on the receiving end
     * @param wantsFullUpdate    If true, certain things that are only sent when changed are always sent
     */
    constructEntityDescription(gameTick, wantsFullUpdate) {
        // Note: "~~" is just a way to round the value without the Math.round function call
        var returnString = this.entityid;
        returnString += "," + this.clientid;
        returnString += "," + this.entityType;
        returnString += "," + 0; //~~this.position.x;
        returnString += "," + 0; //~~this.position.y;

        return returnString;
    }

    ////// TRAIT SUPPORT
    /**
     * Adds and attaches a trait (already created), to this entity.
     * The trait is only attached if we do not already have one of the same type attached, or don't care (aTrait.canStack = true)
     * @param {RealtimeMultiplayerGame.controller.traits.BaseTrait} aTrait A BaseTrait instance
     * @return {Boolean} Whether the trait was added
     */
    addTrait(aTrait) {
        // Check if we already have this trait, if we do - make sure the trait allows stacking
        var existingVersionOfTrait = this.getTraitWithName(aTrait.displayName);
        if (existingVersionOfTrait && !existingVersionOfTrait.canStack) {
            return false;
        }

        // Remove existing version
        if (existingVersionOfTrait) {
            this.removeTraitWithName(aTrait.displayName);
        }


        this.traits.push(aTrait);
        aTrait.attach(this);

        return aTrait;
    }

    /**
     * Calls addTrait and executes it immediately
     * @param aTrait
     */
    addTraitAndExecute(aTrait) {
        var wasAdded = this.addTrait(aTrait);
        if (wasAdded) {
            aTrait.execute();
            return aTrait;
        }

        return null;
    }

    /**
     * Removes a trait with a matching .displayName property
     * @param aTraitName
     */
    removeTraitWithName(aTraitName) {
        var len = this.traits.length;
        var removedTraits = null;
        for (var i = 0; i < len; ++i) {
            if (this.traits[i].displayName === aTraitName) {
                removedTraits = this.traits.splice(i, 1);
                break;
            }
        }

        // Detach removed traits
        if (removedTraits) {
            i = removedTraits.length;
            while (i--) {
                removedTraits[i].detach();
            }
        }
    }

    /**
     * Removes all traits contained in this entity
     */
    removeAllTraits() {
        var i = this.traits.length;
        while (i--) {
            this.traits[i].detach();
        }

        this.traits = [];
    }

    ///// MEMORY
    dealloc() {
        this.position = null;
        this.removeAllTraits();
        this.traits = null;
    }

    ////// ACCESSORS
    setView(aView) {
        this.view = aView;
    }
    getView() {
        return this.view;
    }
    /**
     * Returns a trait with a matching .displayName property
     * @param aTraitName
     */
    getTraitWithName(aTraitName) {
        var len = this.traits.length;
        var trait = null;
        for (var i = 0; i < len; ++i) {
            if (this.traits[i].displayName === aTraitName) {
                trait = this.traits[i];
                break;
            }
        }
        return trait;
    }
    
    doSomething() {
        return "hi";
    }
}

module.exports = GameEntity;