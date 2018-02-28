var Constants = require('./DemoAppConstants');
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
 Version:
 1.0
 */
export default class DemoView {
    constructor() {
        this.setupCAAT();
        this.setupStats();
        this.caatDirector = null;				// CAAT Director instance
        this.caatScene = null;				// CAAT Scene instance
        this.stats = null;				// Stats.js instance
    };


    // Methods
    setupCAAT() {
        this.caatScene = new CAAT.Scene(); // Create a scene, all directors must have at least one scene - this is where all your stuff goes
        this.caatScene.create();	// Notice we call create when creating this, and ShapeActor below. Both are Actors
        this.caatScene.setFillStyle('#000000');

        this.caatDirector = new CAAT.Director().initialize(Constants.GAME_WIDTH, Constants.GAME_HEIGHT); // Create the director instance
        this.caatDirector.addScene(this.caatScene); // Immediately add the scene once it's created

        // Start the render loop, with at 60FPS
//			this.caatDirector.loop(60);
    }

    /**
     * Updates our current view, passing along the current actual time (via Date().getTime());
     * @param {Number} gameClockReal The current actual time, according to the game
     */
    update(gameClockReal) {
        var delta = gameClockReal - this.caatDirector.timeline;
        this.caatDirector.render(delta);
        this.caatDirector.timeline = gameClockReal;
    }

    /**
     * Creates a Stats.js instance and adds it to the page
     */
    setupStats() {
        var container = document.createElement('div');
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '0px';
        container.appendChild(this.stats.domElement);
        document.body.appendChild(container);
    }

    addEntity(anEntityView) {
        console.log("Adding Entity To CAAT", anEntityView);
        this.caatScene.addChild(anEntityView);
    }

    removeEntity(anEntityView) {
        console.log("Removing Entity From CAAT", anEntityView);
        this.caatScene.removeChild(anEntityView);
    }

    /**
     * Insert the CAATDirector canvas into an HTMLElement
     * @param {String} id An HTMLElement id
     */
    insertIntoHTMLElementWithId(id) {
        document.getElementById(id).appendChild(this.caatDirector.canvas);
    }

    // Memory
    dealloc() {
        this.director.destroy();
    }
}


