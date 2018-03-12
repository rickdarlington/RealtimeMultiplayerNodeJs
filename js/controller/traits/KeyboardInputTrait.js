var BaseTrait = require('./BaseTrait');
var Keyboard = require('../../input/Keyboard');
/**
 File:
 BaseTrait.js
 Created By:
 Mario Gonzalez
 Project    :
 RealtimeMultiplayerNodeJS
 Abstract:
 Traits work by effectively 'hi-jacking' properties of their attachedEntity.
 These properties can by functions, or non-primitive data types.

 Instead of creating a new trivial subclass, considering creating a trait and attaching it to that object

 For example to make an entity invincible for a period of time you might make a trait like this

 [PSUEDO CODE START]
 // Inside a trait subclass
 attach: function(anEntity)
 {
     this.callSuper();
     this.intercept(['onHit', 'getShotPower']);
 }

 onHit: function() {
 		// Do nothing, im invincible!
 	}

 getShotStrength: function() {
 		return 100000000; // OMGBBQ! Thats high!
 	}
 [PSUEDO CODE END]

 Be sure to call restore before detaching the trait!

 Basic Usage:

 // Let my character be controlled by the KB
 if(newEntity.connectionID === this.netChannel.connectionID) {
		aCharacter.addTraitAndExecute( new ClientControlledTrait() );
		this.clientCharacter = aCharacter;
	}
 */
class KeyboardInputTrait extends BaseTrait {    
    
    constructor() {
        super();
        this.displayName = "KeyboardInputTrait";					// Unique string name for this Trait
    }


    
    /**
     * Attach the trait to the host object
     * @param anEntity
     */
    attach(anEntity) {
        super.attach(anEntity);

        // Intercept those two properties from the attached enitity with our own
        this.intercept(['constructEntityDescription', 'handleInput']);
        this.attachedEntity.input = new Keyboard();
        this.attachedEntity.input.attachEvents();
    }

    /**
     * Implement our own intercepted version of the methods/properties
     */
    constructEntityDescription(gameTick, wantsFullUpdate) {
        return {
            entityid: this.entityid,
            input: this.input.constructInputBitmask()
        }
    }

    // Do nothing
    handleInput(gameClock) {
    }
}

module.exports = KeyboardInputTrait;