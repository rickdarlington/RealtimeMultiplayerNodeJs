/**
 File:
 Constants.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This class contains Constants used by RealtimeMuliplayerGame
 Basic Usage:
 [This class is not instantiated! - below is an example of using this class by extending it]
 var clientDropWait = RealtimeMultiplayerGame.Constants.CL_DEFAULT_MAXRATE
 */
module.exports = {
    DEBUG_SETTING: {
        SERVER_NETCHANNEL_DEBUG: true,
        CLIENT_NETCHANNEL_DEBUG: true
    },

    SERVER_SETTING: {
        CLIENT_ID: 0,
        SOCKET_PROTOCOL: "http",
        SOCKET_DOMAIN: "localhost",
        SOCKET_PORT: 8001,

        /** @return {string} */
        GET_URI: function () {
            return this.SOCKET_PROTOCOL
                + "://" + this.SOCKET_DOMAIN
                + ":" + this.SOCKET_PORT;
        }
    },

    CLIENT_SETTING: {
        INTERP: 75,						// How far back to interpolate the client-rendered world
        FAKE_LAG: 0,						// Used to simulate latency
        UPDATE_RATE: Math.round(1000 / 30), 					// How often to request a world-update from the server
        CMD_RATE: Math.round(1000 / 31),                  // How often a client can send messages to server
        MAX_BUFFER: 64,
        EXPIRED_ENTITY_CHECK_RATE: 30,		// How often we clear out entities that the server says no longer exist. Lower looks better but decreases framerate
        MAX_UPDATE_FAILURE_COUNT: 3			// How many times we allow ourselves to fail when getting behind the server time
    },

    CMDS: {
        SERVER_CONNECT: 1,			// Dispatched by the server if it acknowledges a client connection
        SERVER_MATCH_START: 2,			// Server broadcast game start
        SERVER_END_GAME: 3,			// Server broadcast game over
        PLAYER_CONNECT: 4,			// Initial connection to the server, not in game yet
        PLAYER_JOINED: 5,           // Player has joined the current game
        PLAYER_DISCONNECT: 6,           // Player has disconnected
        PLAYER_UPDATE: 7,			// Player is sending sampled input
        SERVER_FULL_UPDATE: 8
    },

    // The client sends this bitmask to the server
    // See (Keyboard.js)
    INPUT_BITMASK: {
        UP: 1 << 0,
        DOWN: 1 << 1,
        LEFT: 1 << 2,
        RIGHT: 1 << 3,
        SPACE: 1 << 4,
        SHIFT: 1 << 5,
        TAB: 1 << 6
    },

    BOUNDARY_WRAP_X: 1 << 0,
    BOUNDARY_WRAP_Y: 1 << 1,
    BOUNDARY_CONSTRAIN_X: 1 << 2,
    BOUNDARY_CONSTRAIN_Y: 1 << 3,
}