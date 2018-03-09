/**
 File:
 server.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This is the base server module for starting RealtimeMultiplayerGame
 Basic Usage:
 node server.js
 Version:
 1.0
 */
var DemoServerGame = require("./DemoServerGame.js");

var game = new DemoServerGame();
game.startGameClock();
