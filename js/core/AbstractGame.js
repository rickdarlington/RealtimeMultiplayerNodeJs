/**
 File:
 AbstractGame.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This class is the base Game controller in RealtimeMultiplayerGame it provides things such as, keeping track of the current game clock, starting and stopping the game clock
 Basic Usage:
 [This class is not instantiated! - below is an example of using this class by extending it]

 (function(){
		MyGameClass = function() {
			return this;
 		}

		RealtimeMultiplayerGame.extend(MyGameClass, RealtimeMultiplayerGame.AbstractGame, null);
	};
 */

export default class AbstractGame {

    constructor() {
        this.setupNetChannel();
        this.setupCmdMap();
        this.fieldController = new RealtimeMultiplayerGame.Controller.FieldController();

        // Properties
        this.gameClockReal = 0;											// Actual time via "new Date().getTime();"
        this.gameClock = 0;											// Seconds since start
        this.gameTick = 0;											// Ticks since start
        this.isRunning = true;
        this.speedFactor = 1;											// Used to create Framerate Independent Motion (FRIM) - 1.0 means running at exactly the correct speed, 0.5 means half-framerate. (otherwise faster machines which can update themselves more accurately will have an advantage)
        this.intervalGameTick = null;											// Setinterval for gametick
        this.intervalFramerate = 60;											// Try to call our tick function this often, intervalFramerate, is used to determin how often to call settimeout - we can set to lower numbers for slower computers
        this.intervalTargetDelta = NaN;	// this.targetDelta, milliseconds between frames. Normally it is 16ms or 60FPS. The framerate the game is designed against - used to create framerate independent motion
        this.gameDuration = Number.MAX_VALUE;								// Gameduration

        this.netChannel = null;											// ServerNetChannel / ClientNetChannel determined by subclass
        this.fieldController = null;											// FieldController
        this.cmdMap = {};

        return this;
    };



    /**
     * Setup the ClientNetChannel or ServerNetChannel
     */
    setupNetChannel() {
    }

    /**
     * setup the command mapping for the events recevied from netchannel
     */
    setupCmdMap() {
    }

    // Methods
    tick() {
        // Store previous time and update current
        var oldTime = this.gameClockReal;
        this.gameClockReal = new Date().getTime();

        // Our clock is zero based, so if for example it says 10,000 - that means the game started 10 seconds ago
        var delta = this.gameClockReal - oldTime;
        this.gameClock += delta;
        this.gameTick++;

        // Framerate Independent Motion -
        // 1.0 means running at exactly the correct speed, 0.5 means half-framerate. (otherwise faster machines which can update themselves more accurately will have an advantage)
        this.speedFactor = delta / ( this.intervalTargetDelta );
        if (this.speedFactor <= 0) this.speedFactor = 1;

        this.fieldController.tick(this.speedFactor, this.gameClockReal, this.gameTick);
    }


    /**
     * Start/Restart the game tick
     */
    startGameClock() {
        var that = this;
        this.gameClockReal = new Date().getTime();
        this.intervalTargetDelta = Math.floor(1000 / this.intervalFramerate);
        this.intervalGameTick = setInterval(function () {
            that.tick()
        }, this.intervalTargetDelta);
    }

    /**
     * Stop the game tick
     */
    stopGameClock() {
        clearInterval(this.intervalGameTick);
        clearTimeout(this.intervalGameTick);
    }

    setGameDuration() {
    }

    // Memory
    dealloc() {
        if (this.netChannel) this.netChannel.dealloc();
        this.netChannel = null;

        clearInterval(this.intervalGameTick);
    }

    log() {
        // OVERRIDE or USE CONSOLE.LOG
    }

    ///// Accessors
    getGameClock() {
        return this.gameClock;
    }

    getGameTick() {
        return this.gameTick;
    }
}