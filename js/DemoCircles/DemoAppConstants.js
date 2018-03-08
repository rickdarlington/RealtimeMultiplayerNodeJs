/**
 File:
 DemoAppConstants.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS - Demo
 Abstract:
 This class contains Constants used by the DemoApp in RealtimeMultiplayerGame
 Basic Usage:
 [This class is not instantiated! - below is an example of using this class by extending it]
 var clientDropWait = RealtimeMultiplayerGame.Constants.CL_DEFAULT_MAXRATE

 Version:
 1.0
 */
 module.exports = function(){
    class Constants {
        
    }
    Constants.ENTITY_DEFAULT_RADIUS = 8;
    Constants.GAME_WIDTH = 700;
    Constants.GAME_HEIGHT = 450;
    Constants.MAX_CIRCLES = 100;
    Constants.GAME_DURATION = 1000 * 300;
    Constants.UNKNOWN = 1 << 0;
    Constants.GENERIC_CIRCLE = 1 << 1;
    Constants.PLAYER_ENTITY = 1 << 2;
    
    Constants.ENTITY_TYPES = {
        
    }
 }