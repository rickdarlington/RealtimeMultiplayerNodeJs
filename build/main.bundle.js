/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
 var clientDropWait: RealtimeMultiplayerGame.Constants.CL_DEFAULT_MAXRATE

 Version:
 1.0
 */
module.exports = {
  ENTITY_DEFAULT_RADIUS: 8,
  GAME_WIDTH: 700,
  GAME_HEIGHT: 450,
  MAX_CIRCLES: 100,
  GAME_DURATION: 1000 * 300,
  UNKNOWN: 1 << 0,
  GENERIC_CIRCLE: 1 << 1,
  PLAYER_ENTITY: 1 << 2
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author  Hyperandroid  ||  http://hyperandroid.com/
 *
 * Hold a 2D point information.
 * Think about the possibility of turning CAAT.Point into {x:,y:}.
 *
 * (This is stolen from Hyperandroid's CAAT)
 **/
var Point = function () {

    /**
     *
     * A point defined by two coordinates.
     *
     * @param xpos {number}
     * @param ypos {number}
     *
     * @constructor
     */
    function Point(xpos, ypos) {
        _classCallCheck(this, Point);

        this.x = xpos || 0;
        this.y = ypos || 0;
        return this;
    }

    _createClass(Point, [{
        key: "setPos",
        value: function setPos(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        /**
         * Create a new RealtimeMultiplayerGame.model.Point equal to this one.
         * @return {RealtimeMultiplayerGame.model.Point}
         */

    }, {
        key: "clone",
        value: function clone() {
            var p = new Point();
            p.setPos(this.x, this.y);
            return p;
        }
        /**
         * Translate this point to another position. The final point will be (point.x+x, point.y+y)
         * @param x {number}
         * @param y {number}
         *
         * @return this
         */

    }, {
        key: "translate",
        value: function translate(x, y) {
            this.x += x;
            this.y += y;

            return this;
        }
        /**
         * Translate this point to another point.
         * @param aPoint {RealtimeMultiplayerGame.model.Point}
         * @return this
         */

    }, {
        key: "translatePoint",
        value: function translatePoint(aPoint) {
            this.x += aPoint.x;
            this.y += aPoint.y;
            return this;
        }
        /**
         * Substract a point from this one.
         * @param aPoint {RealtimeMultiplayerGame.model.Point}
         * @return this
         */

    }, {
        key: "subtract",
        value: function subtract(aPoint) {
            this.x -= aPoint.x;
            this.y -= aPoint.y;
            return this;
        }

        /**
         * Substract a point from this one
         * Returns a new point with the difference
         * @param aPoint {RealtimeMultiplayerGame.model.Point}
         * @return {RealtimeMultiplayerGame.model.Point}
         */

    }, {
        key: "subtractClone",
        value: function subtractClone(aPoint) {
            return new Point(this.x - aPoint.x, this.y - aPoint.y);
        }

        /**
         * Multiply this point by a scalar.
         * @param factor {number}
         * @return this
         */

    }, {
        key: "multiply",
        value: function multiply(factor) {
            this.x *= factor;
            this.y *= factor;
            return this;
        }
        /**
         * Rotate this point by an angle. The rotation is held by (0,0) coordinate as center.
         * @param angle {number}
         * @return this
         */

    }, {
        key: "rotate",
        value: function rotate(angle) {
            var x = this.x,
                y = this.y;
            this.x = x * Math.cos(angle) - Math.sin(angle) * y;
            this.y = x * Math.sin(angle) + Math.cos(angle) * y;
            return this;
        }
        /**
         *
         * @param angle {number}
         * @return this
         */

    }, {
        key: "setAngle",
        value: function setAngle(angle) {
            var len = this.getLength();
            this.x = Math.cos(angle) * len;
            this.y = Math.sin(angle) * len;
            return this;
        }
        /**
         *
         * @param length {number}
         * @return this
         */

    }, {
        key: "setLength",
        value: function setLength(length) {
            var len = this.getLength();
            if (len) this.multiply(length / len);else this.x = this.y = length;
            return this;
        }
        /**
         * Normalize this point, that is, both set coordinates proportionally to values raning 0..1
         * @return this
         */

    }, {
        key: "normalize",
        value: function normalize() {
            var len = this.getLength();
            this.x /= len;
            this.y /= len;
            return this;
        }
        /**
         * Return the angle from -Pi to Pi of this point.
         * @return {number}
         */

    }, {
        key: "getAngle",
        value: function getAngle() {
            return Math.atan2(this.y, this.x);
        }
        /**
         * Set this point coordinates proportinally to a maximum value.
         * @param max {number}
         * @return this
         */

    }, {
        key: "limit",
        value: function limit(max) {
            var aLenthSquared = this.getLengthSquared();
            if (aLenthSquared + 0.01 > max * max) {
                var aLength = Math.sqrt(aLenthSquared);
                this.x = this.x / aLength * max;
                this.y = this.y / aLength * max;
            }
            return this;
        }
        /**
         * Get this point's lenght.
         * @return {number}
         */

    }, {
        key: "getLength",
        value: function getLength() {
            var length = Math.sqrt(this.x * this.x + this.y * this.y);
            if (length < 0.005 && length > -0.005) return 0.000001;
            return length;
        }
        /**
         * Get this point's squared length.
         * @return {number}
         */

    }, {
        key: "getLengthSquared",
        value: function getLengthSquared() {
            var lengthSquared = this.x * this.x + this.y * this.y;
            if (lengthSquared < 0.005 && lengthSquared > -0.005) return 0;
            return lengthSquared;
        }
        /**
         * Get the distance between two points.
         * @param point {RealtimeMultiplayerGame.model.Point}
         * @return {number}
         */

    }, {
        key: "getDistance",
        value: function getDistance(point) {
            var deltaX = this.x - point.x;
            var deltaY = this.y - point.y;
            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        }
        /**
         * Get the squared distance between two points.
         * @param point {RealtimeMultiplayerGame.model.Point}
         * @return {number}
         */

    }, {
        key: "getDistanceSquared",
        value: function getDistanceSquared(point) {
            var deltaX = this.x - point.x;
            var deltaY = this.y - point.y;
            return deltaX * deltaX + deltaY * deltaY;
        }
        /**
         * Get a string representation.
         * @return {string}
         */

    }, {
        key: "toString",
        value: function toString() {
            return "(Point)" + " x:'" + String(Math.round(Math.floor(this.x * 10)) / 10) + " y:" + String(Math.round(Math.floor(this.y * 10)) / 10);
        }
    }, {
        key: "ZERO",
        value: function ZERO() {
            return new Point(0, 0);
        }
    }]);

    return Point;
}();

module.exports = Point;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
File:
	SortedLookupTable.js
Created By:
	(Class from http://blog.jcoglan.com/2010/10/18/i-am-a-fast-loop/)
	Copy->Pasted->Modified by Mario Gonzalez
	
Project	:
	Ogilvy Holiday Card 2010
Abstract:

	A sorted LookupTable is a data structure that provides us a way to iterate thru objects at a speed
	comparable to reverse while, but also have named keys as we would if we used an object (which provides very slow iteration)
	It also gives us O(log n) removal of objects.
Basic Usage:

	http://blog.jcoglan.com/2010/10/18/i-am-a-fast-loop/
*/
// @getify's solution
//var Set = (function()
//{
//	var indexOf = Array.prototype.indexOf;
//
//	if (typeof indexOf !== 'function')
//	{
//		indexOf(value)
//		{
//			for (var index = 0, length = this.length; index < length; index++)
//			{
//				if (this[index] === value)
//				{
//					return index;
//				}
//			}
//			return -1;
//		}
//	}
//
//	function Set()
//	{
//		this.set = [];
//	}
//
//	Set.prototype = {
//		'constructor': Set,
//		'put': function(value, key)
//		{
//			var index = indexOf.call(this.set, key);
//			if (index !== -1 && index % 2 === 0)
//			{
//				this.set.splice(index, 2);
//			}
//			this.set.push(key, value);
//		},
//		'get': function(key)
//		{
//			var index = indexOf.call(this.set, key);
//			return (index !== -1 && index % 2 === 0) ? this.set[++index] : null;
//		},
//		'containsKey': function(key)
//		{
//			var index = indexOf.call(this.set, key);
//			return (index !== -1 && index % 2 === 0);
//		},
//		'containsValue': function(value)
//		{
//			var index = indexOf.call(this.set, value);
//			return (index !== -1 && index % 2 !== 0);
//		},
//		'remove': function(key)
//		{
//			var index = indexOf.call(this.set, key),
//					value = null;
//			if (index !== -1 && index % 2 === 0)
//			{
//				value = this.set.splice(index, 2)[1];
//			}
//			return value;
//		},
//
//		'forEach': function(block, context)
//		{
//			var set = this.set,
//				i = this.set.length-1,
//				key;
//
//			while (i > 0)
//			{
//				block.call(context, set[i - 1], set[key]);
//				i-=2;
//			}
//		}
//	}
//
//	return Set;
//}());

var LookupTable = function () {
	function LookupTable() {
		_classCallCheck(this, LookupTable);

		this._keys = [];
		this._data = {};
		this.nextUUID = 0;
	}

	_createClass(LookupTable, [{
		key: "setObjectForKey",
		value: function setObjectForKey(value, key) {
			if (!this._data.hasOwnProperty(key)) this._keys.push(key);
			this._data[key] = value;

			return value;
		}
	}, {
		key: "objectForKey",
		value: function objectForKey(key) {
			return this._data[key];
		}
	}, {
		key: "forEach",
		value: function forEach(block, context) {
			var keys = this._keys,
			    data = this._data,
			    i = keys.length,
			    key;

			while (i--) {
				key = keys[i];
				block.call(context, key, data[key]);
			}
		}
	}, {
		key: "count",
		value: function count() {
			return this._keys.length;
		}
	}, {
		key: "dealloc",
		value: function dealloc() {
			delete this._keys;
			delete this._data;
		}
	}]);

	return LookupTable;
}();

var SortedLookupTable = function (_LookupTable) {
	_inherits(SortedLookupTable, _LookupTable);

	/**
 *	Sorted LookupTable,
 */
	function SortedLookupTable() {
		_classCallCheck(this, SortedLookupTable);

		return _possibleConstructorReturn(this, (SortedLookupTable.__proto__ || Object.getPrototypeOf(SortedLookupTable)).call(this));
	}

	_createClass(SortedLookupTable, [{
		key: "setObjectForKey",
		value: function setObjectForKey(value, key) {
			if (!this._data.hasOwnProperty(key)) {
				var index = this._indexOf(key);
				this._keys.splice(index, 0, key);
			}
			this._data[key] = value;

			return value;
		}
	}, {
		key: "remove",
		value: function remove(key) {
			if (!this._data.hasOwnProperty(key)) return;
			delete this._data[key];
			var index = this._indexOf(key);
			this._keys.splice(index, 1);
		}
	}, {
		key: "_indexOf",
		value: function _indexOf(key) {
			var keys = this._keys,
			    n = keys.length,
			    i = 0,
			    d = n;

			if (n === 0) return 0;
			if (key < keys[0]) return 0;
			if (key > keys[n - 1]) return n;

			while (key !== keys[i] && d > 0.5) {
				d = d / 2;
				i += (key > keys[i] ? 1 : -1) * Math.round(d);
				if (key > keys[i - 1] && key < keys[i]) d = 0;
			}
			return i;
		}
	}]);

	return SortedLookupTable;
}(LookupTable);

module.exports = SortedLookupTable;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
        GET_URI: function GET_URI() {
            return this.SOCKET_PROTOCOL + "://" + this.SOCKET_DOMAIN + ":" + this.SOCKET_PORT;
        }
    },

    CLIENT_SETTING: {
        INTERP: 75, // How far back to interpolate the client-rendered world
        FAKE_LAG: 0, // Used to simulate latency
        UPDATE_RATE: Math.round(1000 / 30), // How often to request a world-update from the server
        CMD_RATE: Math.round(1000 / 31), // How often a client can send messages to server
        MAX_BUFFER: 64,
        EXPIRED_ENTITY_CHECK_RATE: 30, // How often we clear out entities that the server says no longer exist. Lower looks better but decreases framerate
        MAX_UPDATE_FAILURE_COUNT: 3 // How many times we allow ourselves to fail when getting behind the server time
    },

    CMDS: {
        SERVER_CONNECT: 1, // Dispatched by the server if it acknowledges a client connection
        SERVER_MATCH_START: 2, // Server broadcast game start
        SERVER_END_GAME: 3, // Server broadcast game over
        PLAYER_CONNECT: 4, // Initial connection to the server, not in game yet
        PLAYER_JOINED: 5, // Player has joined the current game
        PLAYER_DISCONNECT: 6, // Player has disconnected
        PLAYER_UPDATE: 7, // Player is sending sampled input
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
    BOUNDARY_CONSTRAIN_Y: 1 << 3
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameEntity = __webpack_require__(7);
var Constants = __webpack_require__(0);
var Point = __webpack_require__(1);
var Noise = __webpack_require__(8);

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

var CircleEntity = function (_GameEntity) {
    _inherits(CircleEntity, _GameEntity);

    function CircleEntity(anEntityid, aClientid) {
        var _ret;

        _classCallCheck(this, CircleEntity);

        var _this = _possibleConstructorReturn(this, (CircleEntity.__proto__ || Object.getPrototypeOf(CircleEntity)).call(this, anEntityid, aClientid));

        _this.entityid = anEntityid;
        _this.collisionCircle = null;
        _this.entityType = Constants.GENERIC_CIRCLE;
        _this.nOffset = Math.random() * 2000;
        _this.setColor("FFFFFF");
        _this.velocity = new Point(0, 0).ZERO();
        _this.acceleration = new Point(0, 0).ZERO();
        _this.radius = Constants.ENTITY_DEFAULT_RADIUS;
        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Update the entity's view - this is only called on the clientside
     */


    _createClass(CircleEntity, [{
        key: 'updateView',
        value: function updateView() {
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

    }, {
        key: 'updatePosition',
        value: function updatePosition(speedFactor, gameClock, gameTick) {

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
    }, {
        key: 'tempColor',
        value: function tempColor() {
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

    }, {
        key: 'dealloc',
        value: function dealloc() {
            this.collisionCircle.dealloc();
            this.collisionCircle = null;
            //DemoApp.CircleEntity.superclass.dealloc.call(this);
            _get(CircleEntity.prototype.__proto__ || Object.getPrototypeOf(CircleEntity.prototype), 'dealloc', this).call(this);
        }
    }, {
        key: 'constructEntityDescription',
        value: function constructEntityDescription() {
            //return DemoApp.CircleEntity.superclass.constructEntityDescription.call(this) + ',' + this.radius + ',' + this.color;
            _get(CircleEntity.prototype.__proto__ || Object.getPrototypeOf(CircleEntity.prototype), 'constructEntityDescription', this).call(this.radius, this.color);
        }

        ///// ACCESSORS
        /**
         * Set the CollisionCircle for this game entity.
         * @param aCollisionCircle
         */

    }, {
        key: 'setCollisionCircle',
        value: function setCollisionCircle(aCollisionCircle) {
            this.collisionCircle = aCollisionCircle;
            this.collisionCircle.setDelegate(this);
            this.collisionCircle.setPosition(this.position.clone());
            this.collisionCircle.setRadius(this.radius);
            this.collisionCircle.collisionMask = 1;
            this.collisionCircle.collisionGroup = 1;
        }
    }, {
        key: 'getCollisionCircle',
        value: function getCollisionCircle() {
            return this.collisionCircle;
        }

        /**
         * Set the color of this entity, a property originalColor is also stored
         * @param aColor
         */

    }, {
        key: 'setColor',
        value: function setColor(aColor) {
            if (!this.originalColor) {
                this.originalColor = aColor;
            }

            this.color = aColor;
        }
    }, {
        key: 'getColor',
        value: function getColor() {
            return this.color;
        }
    }, {
        key: 'getOriginalColor',
        value: function getOriginalColor() {
            return this.originalColor;
        }
    }]);

    return CircleEntity;
}(GameEntity);

module.exports = CircleEntity;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DemoClientGame = __webpack_require__(6);

(function () {
    var onDocumentReady = function onDocumentReady() {
        var clientGame = new DemoClientGame();
    };

    window.addEventListener('load', onDocumentReady, false);
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global CAAT */
var Constants = __webpack_require__(0);
var CircleEntity = __webpack_require__(4);
var DemoView = __webpack_require__(9);
var AbstractClientGame = __webpack_require__(10);
var PlayerEntity = __webpack_require__(15);
var KeyboardInputTrait = __webpack_require__(16);

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

var DemoClientGame = function (_AbstractClientGame) {
    _inherits(DemoClientGame, _AbstractClientGame);

    function DemoClientGame() {
        var _ret;

        _classCallCheck(this, DemoClientGame);

        var _this = _possibleConstructorReturn(this, (DemoClientGame.__proto__ || Object.getPrototypeOf(DemoClientGame)).call(this));

        _this.setupView();
        _this.startGameClock();
        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DemoClientGame, [{
        key: 'setupView',
        value: function setupView() {
            this.view = new DemoView();
            this.view.insertIntoHTMLElementWithId("gamecontainer");

            _get(DemoClientGame.prototype.__proto__ || Object.getPrototypeOf(DemoClientGame.prototype), 'setupView', this).call(this, this);
        }
    }, {
        key: 'tick',


        /**
         * @inheritDoc
         */
        value: function tick() {
            _get(DemoClientGame.prototype.__proto__ || Object.getPrototypeOf(DemoClientGame.prototype), 'tick', this).call(this);
            this.view.stats.update();
            this.view.update(this.gameClockReal);
        }
    }, {
        key: 'createEntityFromDesc',


        /**
         * @inheritDoc
         */
        value: function createEntityFromDesc(entityDesc) {

            var diameter = entityDesc.radius * 2;

            if (!entityDesc.entityType) {
                console.log("demoClientGame");
                console.log(entityDesc.entityType + " " + entityDesc.entityid);
                return;
            }

            // Create a view via CAAT
            var aCircleView = new CAAT.ShapeActor();
            aCircleView.create();
            aCircleView.setSize(diameter, diameter);
            aCircleView.setFillStyle("#" + CAAT.Color.prototype.hsvToRgb(entityDesc.entityid * 15 % 360, 40, 99).toHex()); // Random color
            aCircleView.setLocation(entityDesc.x, entityDesc.y); // Place in the center of the screen, use the director's width/height

            var newEntity = null;

            var isOwnedByMe = entityDesc.clientid == this.netChannel.clientid;
            // If this is a player entity
            if (entityDesc.entityType & Constants.PLAYER_ENTITY) {
                newEntity = new PlayerEntity(entityDesc.entityid, entityDesc.clientid);

                // If it is a player entity and it's my player entity - attach a KeyboardInputTrait to it
                if (isOwnedByMe) {
                    newEntity.addTraitAndExecute(new KeyboardInputTrait());
                    this.clientCharacter = newEntity;
                }
            } else {
                newEntity = new CircleEntity(entityDesc.entityid, entityDesc.clientid);
            }

            newEntity.position.setPos(entityDesc.x, entityDesc.y);
            newEntity.setView(aCircleView);

            this.fieldController.addEntity(newEntity);
        }
    }, {
        key: 'parseEntityDescriptionArray',


        /**
         * Called by the ClientNetChannel, it sends us an array containing tightly packed values and expects us to return a meaningful object
         * It is left up to each game to implement this function because only the game knows what it needs to send.
         * However the 4 example projects in RealtimeMultiplayerNodeJS offer should be used ans examples
         *
         * @param {Array} entityDescAsArray An array of tightly packed values
         * @return {Object} An object which will be returned to you later on tied to a specific entity
         */
        value: function parseEntityDescriptionArray(entityDescAsArray) {
            var entityDescription = {};

            // It is left upto each game to implement this function because only the game knows what it needs to send.
            // However the 4 example projects in RealtimeMultiplayerNodeJS offer this an example
            entityDescription.entityid = entityDescAsArray[0];
            entityDescription.clientid = entityDescAsArray[1];
            entityDescription.entityType = +entityDescAsArray[2];
            entityDescription.x = +entityDescAsArray[3];
            entityDescription.y = +entityDescAsArray[4];
            entityDescription.radius = +entityDescAsArray[5];
            entityDescription.color = entityDescAsArray[6];
            return entityDescription;
        }
    }, {
        key: 'netChannelDidConnect',


        /**
         * @inheritDoc
         */
        value: function netChannelDidConnect(messageData) {
            _get(DemoClientGame.prototype.__proto__ || Object.getPrototypeOf(DemoClientGame.prototype), 'netChannelDidConnect', this).call(this, messageData);
            this.log("this: Joining Game");
            this.joinGame("Player" + this.netChannel.getClientid()); // Automatically join the game with some name
        }
    }, {
        key: 'netChannelDidDisconnect',


        /**
         * @inheritDoc
         */
        value: function netChannelDidDisconnect(messageData) {
            _get(DemoClientGame.prototype.__proto__ || Object.getPrototypeOf(DemoClientGame.prototype), 'netChannelDidDisconnect', this).call(this, messageData);
            this.log("netChannelDidDisconnect");
        }
    }, {
        key: 'log',


        /**
         * This function logs something to the right panel
         * @param {Object} An object in the form of: { message: ['Client', 'domReady'] }
         */
        value: function log(msg) {
            console.log("DemoClientGame: " + msg);
        }
    }]);

    return DemoClientGame;
}(AbstractClientGame);

module.exports = DemoClientGame;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = __webpack_require__(1);
var Constants = __webpack_require__(0);

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

var GameEntity = function () {
    function GameEntity(anEntityid, aClientid) {
        _classCallCheck(this, GameEntity);

        this.clientid = -1; // Owner of this object
        this.entityid = -1; // UUID for this entity
        this.entityType = -1; // A special interger representing the entityType sent via along with other network info
        this.rotation = 0;
        this.traits = null; // An array of our traits; in reverse added order
        this.view = null;
        this.lastReceivedEntityDescription = null; // The last received entity description (set by renderAtTime)

        this.radius = 40;
        this.clientid = aClientid;
        this.entityid = anEntityid;
        this.traits = [];
        this.position = new Point(0, 0);
        this.entityType = Constants.UNKNOWN;
        return this;
    }

    _createClass(GameEntity, [{
        key: 'updateView',


        /**
         * Update the view's position
         */
        value: function updateView() {}
        // OVERRIDE


        /**
         * Updates the position of this GameEntity based on it's movement properties (velocity, acceleration, damping)
         * @param {Number} speedFactor    A number signifying how much faster or slower we are moving than the target framerate
         * @param {Number} gameClock    Current game time in seconds (zero based)
         * @param {Number} gameTick        Current game tick (incrimented each frame)
         */

    }, {
        key: 'updatePosition',
        value: function updatePosition(speedFactor, gameClock, gameTick) {}
        // OVERRIDE


        /**
         * Construct an entity description for this object, it is essentually a CSV so you have to know how to read it on the receiving end
         * @param wantsFullUpdate    If true, certain things that are only sent when changed are always sent
         */

    }, {
        key: 'constructEntityDescription',
        value: function constructEntityDescription(gameTick, wantsFullUpdate) {
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

    }, {
        key: 'addTrait',
        value: function addTrait(aTrait) {
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

    }, {
        key: 'addTraitAndExecute',
        value: function addTraitAndExecute(aTrait) {
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

    }, {
        key: 'removeTraitWithName',
        value: function removeTraitWithName(aTraitName) {
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

    }, {
        key: 'removeAllTraits',
        value: function removeAllTraits() {
            var i = this.traits.length;
            while (i--) {
                this.traits[i].detach();
            }

            this.traits = [];
        }

        ///// MEMORY

    }, {
        key: 'dealloc',
        value: function dealloc() {
            this.position = null;
            this.removeAllTraits();
            this.traits = null;
        }

        ////// ACCESSORS

    }, {
        key: 'setView',
        value: function setView(aView) {
            this.view = aView;
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
        /**
         * Returns a trait with a matching .displayName property
         * @param aTraitName
         */

    }, {
        key: 'getTraitWithName',
        value: function getTraitWithName(aTraitName) {
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
    }, {
        key: 'doSomething',
        value: function doSomething() {
            return "hi";
        }
    }]);

    return GameEntity;
}();

module.exports = GameEntity;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// http://mrl.nyu.edu/~perlin/noise/
var ImprovedNoise = function () {
    function ImprovedNoise() {
        _classCallCheck(this, ImprovedNoise);

        var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

        for (var i = 0; i < 256; i++) {

            p[256 + i] = p[i];
        }
    }

    _createClass(ImprovedNoise, [{
        key: "fade",
        value: function fade(t) {

            return t * t * t * (t * (t * 6 - 15) + 10);
        }
    }, {
        key: "lerp",
        value: function lerp(t, a, b) {

            return a + t * (b - a);
        }
    }, {
        key: "grad",
        value: function grad(hash, x, y, z) {

            var h = hash & 15;
            var u = h < 8 ? x : y,
                v = h < 4 ? y : h == 12 || h == 14 ? x : z;
            return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
        }
    }]);

    return ImprovedNoise;
}();

var Noise = function (_ImprovedNoise) {
    _inherits(Noise, _ImprovedNoise);

    function Noise(x, y, z) {
        var _ret;

        _classCallCheck(this, Noise);

        var _this = _possibleConstructorReturn(this, (Noise.__proto__ || Object.getPrototypeOf(Noise)).call(this));

        var n = new ImprovedNoise();

        var floorX = ~~x,
            floorY = ~~y,
            floorZ = ~~z;

        var X = floorX & 255,
            Y = floorY & 255,
            Z = floorZ & 255;

        x -= floorX;
        y -= floorY;
        z -= floorZ;

        var xMinus1 = x - 1,
            yMinus1 = y - 1,
            zMinus1 = z - 1;

        var u = n.fade(x),
            v = n.fade(y),
            w = n.fade(z);

        var A = n.p[X] + Y,
            AA = n.p[A] + Z,
            AB = n.p[A + 1] + Z,
            B = n.p[X + 1] + Y,
            BA = n.p[B] + Z,
            BB = n.p[B + 1] + Z;

        return _ret = n.lerp(w, n.lerp(v, n.lerp(u, n.grad(n.p[AA], x, y, z), n.grad(n.p[BA], xMinus1, y, z)), n.lerp(u, n.grad(n.p[AB], x, yMinus1, z), n.grad(n.p[BB], xMinus1, yMinus1, z))), n.lerp(v, n.lerp(u, n.grad(n.p[AA + 1], x, y, zMinus1), n.grad(n.p[BA + 1], xMinus1, y, z - 1)), n.lerp(u, n.grad(n.p[AB + 1], x, yMinus1, zMinus1), n.grad(n.p[BB + 1], xMinus1, yMinus1, zMinus1)))), _possibleConstructorReturn(_this, _ret);
    }

    return Noise;
}(ImprovedNoise);

module.exports = Noise;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global CAAT */
/* global Stats */
var Constants = __webpack_require__(0);

var DemoView = function () {
    function DemoView() {
        _classCallCheck(this, DemoView);

        this.setupCAAT();
        this.setupStats();
    }

    _createClass(DemoView, [{
        key: 'setupCAAT',


        // Methods
        value: function setupCAAT() {
            this.caatScene = new CAAT.Scene(); // Create a scene, all directors must have at least one scene - this is where all your stuff goes
            this.caatScene.create(); // Notice we call create when creating this, and ShapeActor below. Both are Actors
            this.caatScene.setFillStyle('#000000');

            console.log("playarea:");
            console.log(Constants.GAME_WIDTH + " x " + Constants.GAME_HEIGHT);

            this.caatDirector = new CAAT.Director().initialize(Constants.GAME_WIDTH, Constants.GAME_HEIGHT); // Create the director instance
            this.caatDirector.addScene(this.caatScene); // Immediately add the scene once it's created

            // Start the render loop, with at 60FPS
            //			this.caatDirector.loop(60);
        }

        /**
         * Updates our current view, passing along the current actual time (via Date().getTime());
         * @param {Number} gameClockReal The current actual time, according to the game
         */

    }, {
        key: 'update',
        value: function update(gameClockReal) {
            var delta = gameClockReal - this.caatDirector.timeline;
            this.caatDirector.render(delta);
            this.caatDirector.timeline = gameClockReal;
        }

        /**
         * Creates a Stats.js instance and adds it to the page
         */

    }, {
        key: 'setupStats',
        value: function setupStats() {
            var container = document.createElement('div');
            this.stats = new Stats();
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
            container.appendChild(this.stats.domElement);
            document.body.appendChild(container);
        }
    }, {
        key: 'addEntity',
        value: function addEntity(anEntityView) {
            console.log("Adding Entity To CAAT", anEntityView);
            this.caatScene.addChild(anEntityView);
        }
    }, {
        key: 'removeEntity',
        value: function removeEntity(anEntityView) {
            console.log("Removing Entity From CAAT", anEntityView);
            this.caatScene.removeChild(anEntityView);
        }

        /**
         * Insert the CAATDirector canvas into an HTMLElement
         * @param {String} id An HTMLElement id
         */

    }, {
        key: 'insertIntoHTMLElementWithId',
        value: function insertIntoHTMLElementWithId(id) {
            document.getElementById(id).appendChild(this.caatDirector.canvas);
        }

        // Memory

    }, {
        key: 'dealloc',
        value: function dealloc() {
            this.caatDirector.destroy();
        }
    }]);

    return DemoView;
}();

module.exports = DemoView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractGame = __webpack_require__(11);
var ClientNetChannel = __webpack_require__(13);
var Constants = __webpack_require__(3);
var Point = __webpack_require__(1);

/**
 File:
 AbstractClientGame.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 This class is the client side base Game controller
 Basic Usage:
 [This class is not instantiated! - below is an example of using this class by extending it]

 (function(){
		MyGameClass = function() {
			return this;
 		}

		RealtimeMultiplayerGame.extend(MyGameClass, RealtimeMultiplayerGame.AbstractGame, null);
	};
 */

var AbstractClientGame = function (_AbstractGame) {
    _inherits(AbstractClientGame, _AbstractGame);

    function AbstractClientGame() {
        var _ret;

        _classCallCheck(this, AbstractClientGame);

        var _this = _possibleConstructorReturn(this, (AbstractClientGame.__proto__ || Object.getPrototypeOf(AbstractClientGame)).call(this));

        _this.setupView();
        _this.setupNetChannel();
        _this.view = null; // View
        _this.clientCharacter = null; // Reference to this users character
        _this.nickname = ''; // User 'nickname'
        _this.locateUpdateFailedCount = 0;
        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AbstractClientGame, [{
        key: 'setupView',


        // Methods
        /**
         * Setup the view
         * RealtimeMultiplayerNodeJS is agnostic any rendering method
         */
        value: function setupView() {
            if (this.view === null) {
                // If this is called, then user has not overwritten this function
                throw new Error("RealtimeMultiplayerGame.AbstractClientGame.setupView - Override this method, then call MyClientGame.superclass.setupView()");
            }
            this.fieldController.setView(this.view);
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'setupNetChannel',
        value: function setupNetChannel() {
            _get(AbstractClientGame.prototype.__proto__ || Object.getPrototypeOf(AbstractClientGame.prototype), 'setupNetChannel', this).call(this); //is a no-op.  WTF is with all these super no-ops?
            this.netChannel = new ClientNetChannel(this);
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'setupCmdMap',
        value: function setupCmdMap() {
            _get(AbstractClientGame.prototype.__proto__ || Object.getPrototypeOf(AbstractClientGame.prototype), 'setupCmdMap', this).call(this);
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'tick',
        value: function tick() {
            _get(AbstractClientGame.prototype.__proto__ || Object.getPrototypeOf(AbstractClientGame.prototype), 'tick', this).call(this);

            // Allow all entities to update their position
            this.fieldController.getEntities().forEach(function (key, entity) {
                entity.updateView();
            }, this);

            // Continuously queue information about our input - which will be sent to the server by netchannel
            if (this.clientCharacter != null) {
                var input = this.clientCharacter.constructEntityDescription();
                this.netChannel.addMessageToQueue(false, Constants.CMDS.PLAYER_UPDATE, input);
            }

            // Draw the gameworld
            this.renderAtTime(this.gameClock - Constants.CLIENT_SETTING.INTERP - Constants.CLIENT_SETTING.FAKE_LAG);
            this.netChannel.tick();
        }

        /**
         * Renders back in time between two previously received messages allowing for packet-loss, and a smooth simulation
         * @param renderTime
         */

    }, {
        key: 'renderAtTime',
        value: function renderAtTime(renderTime) {
            var cmdBuffer = this.netChannel.getIncomingWorldUpdateBuffer(),
                len = cmdBuffer.length;

            // Need atleast 2 updates to render between
            if (len < 2) return;
            var newPosition = new Point(0, 0),
                newRotation = 0.0;

            // if the distance between prev and next is too great - don't interpolate
            var maxInterpolationDistance = 150,
                maxInterpSQ = maxInterpolationDistance * maxInterpolationDistance;

            // Store the next world-entity-description before and after the desired render time
            var nextWED = null,
                previousWED = null;

            // Loop through the points, until we find the first one that has a timeValue which is greater than our renderTime
            // Knowing that then we know that the combined with the one before it - that passed our just check - we know we want to render ourselves somehwere between these two points
            var i = 0;
            var forceUpdate = false;
            while (++i < len) {
                var currentWED = cmdBuffer[i];

                // We fall between this "currentWorldEntityDescription", and the last one we just checked
                if (currentWED.gameClock >= renderTime) {
                    previousWED = cmdBuffer[i - 1];
                    nextWED = currentWED;
                    this.locateUpdateFailedCount = 0;
                    break;
                }

                // Have no found a matching update for a while - the client is way behind the server, set our time to the time of the last udpate we received
                //				if(i === len -1) {
                //					if(++this.locateUpdateFailedCount === Constants.CLIENT_SETTING.MAX_UPDATE_FAILURE_COUNT) {
                //						this.gameClock = currentWED.gameClock;
                //						this.gameTick = currentWED.gameTick;
                //						previousWED = cmdBuffer[i-1];
                //						nextWED = currentWED;
                //					}
                //				}
            }

            // Could not find two points to render between
            if (nextWED == null || previousWED == null) {
                console.log("GIVE UP");
                return false;
            }

            /**
             * More info: http://www.learningiphone.com/2010/09/consicely-animate-an-object-along-a-path-sensitive-to-time/
             * Find T in the time value between the points:
             *
             * durationBetweenPoints: Amount of time between the timestamp in both points
             * offset: Figure out what our time would be if we pretended the previousBeforeTime.time was 0.00 by subtracting it from us
             * t: Now that we have a zero based offsetTime, and a maximum time that is also zero based (durationBetweenPoints)
             * we can easily figure out what offsetTime / duration.
             *
             * Example values: timeValue = 5.0f, nextPointTime = 10.0f, lastPointTime = 4.0f
             * result:
             * duration = 6.0f
             * offsetTime = 1.0f
             * t = 0.16
             */
            var durationBetweenPoints = nextWED.gameClock - previousWED.gameClock;
            var offsetTime = renderTime - previousWED.gameClock;
            var activeEntities = {};

            // T is where we fall between, as a function of these two points
            var t = offsetTime / (nextWED.gameClock - previousWED.gameClock);
            if (t > 1.0) t = 1.0;else if (t < 0) t = 0.0;

            // Note: We want to render at time "B", so grab the position at time "A" (previous), and time "C"(next)
            var entityPositionPast = new Point(0, 0),
                entityRotationPast = 0;

            var entityPositionFuture = new Point(0, 0),
                entityRotationFuture = 0;

            // Update players
            nextWED.forEach(function (key, entityDesc) {
                // Catch garbage values
                debugger;
                var entityid = entityDesc.entityid;
                var entity = this.fieldController.getEntityWithid(entityid);

                // We don't have this entity - create it!
                if (!entity) {
                    this.createEntityFromDesc(entityDesc);
                } else {
                    // We already have this entity - update it
                    var previousEntityDescription = previousWED.objectForKey(entityid);

                    // Could not find info for this entity in previous description
                    // This can happen if this is this entities first frame in the game
                    if (!previousEntityDescription) return;

                    // Store past and future positions to compare
                    entityPositionPast.setPos(previousEntityDescription.x, previousEntityDescription.y);
                    entityRotationPast = previousEntityDescription.rotation;

                    entityPositionFuture.setPos(entityDesc.x, entityDesc.y);
                    entityRotationFuture = entityDesc.rotation;

                    // if the distance between prev and next is too great - don't interpolate
                    if (entityPositionPast.getDistanceSquared(entityPositionFuture) > maxInterpSQ) {
                        t = 1;
                    }

                    // Interpolate the objects position by multiplying the Delta times T, and adding the previous position
                    newPosition.x = (entityPositionFuture.x - entityPositionPast.x) * t + entityPositionPast.x;
                    newPosition.y = (entityPositionFuture.y - entityPositionPast.y) * t + entityPositionPast.y;
                    newRotation = (entityRotationFuture - entityRotationPast) * t + entityRotationPast;
                }

                // Update the entity with the new information, and insert it into the activeEntities array
                this.fieldController.updateEntity(entityid, newPosition, newRotation, entityDesc);
                activeEntities[entityid] = true;
            }, this);

            // Destroy removed entities, every N frames
            if (this.gameTick % Constants.CLIENT_SETTING.EXPIRED_ENTITY_CHECK_RATE === 0) this.fieldController.removeExpiredEntities(activeEntities);
        }

        /**
         * Create an enitity using the information provided
         * @param {Object} entityDesc An object containing information such as 'entityid', 'clientid' and usually position information atleast
         */

    }, {
        key: 'createEntityFromDesc',
        value: function createEntityFromDesc(entityDesc) {}
        // OVERRIDE


        /**
         * Called by the ClientNetChannel, it sends us an array containing tightly packed values and expects us to return a meaningful object
         * It is left up to each game to implement this function because only the game knows what it needs to send.
         * However the 4 example projects in RealtimeMultiplayerNodeJS offer should be used ans examples
         *
         * @param {Array} entityDescAsArray An array of tightly packed values
         * @return {Object} An object which will be returned to you later on tied to a specific entity
         */
        //		parseEntityDescriptionArray: function(entityDescAsArray)
        //		{
        //			// This is left in as an example, copy paste this into your AbstractClientGame subclass and modify from there
        //			var entityDescription = {};
        //
        //			// It is left upto each game to implement this function because only the game knows what it needs to send.
        //			// However the 4 example projects in RealtimeMultiplayerNodeJS offer this an example
        ////			entityDescription.entityid = +entityDescAsArray[0];
        ////			entityDescription.clientid = +entityDescAsArray[1];
        ////			entityDescription.entityType = +entityDescAsArray[2];
        ////			entityDescription.x = +entityDescAsArray[3];
        ////			entityDescription.y = +entityDescAsArray[4];
        ////			entityDescription.radius = +entityDescAsArray[5];
        ////			entityDescription.rotation = +entityDescAsArray[6];
        //
        //			return entityDescription;
        //		},

        //////	ClientNetChannelDelegate
        /**
         * ClientNetChannel has connected via socket.io to server for first time
         * Join the game
         * @param messageData
         */

    }, {
        key: 'netChannelDidConnect',
        value: function netChannelDidConnect(messageData) {
            // Sync time with server
            this.gameClock = messageData.payload.gameClock;
        }

        /**
         * Called when the user has entered a name, and wants to join the match
         * @param aNickname
         */

    }, {
        key: 'joinGame',
        value: function joinGame(aNickname) {
            this.nickname = aNickname;
            // Create a 'join' message and queue it in ClientNetChannel
            this.netChannel.addMessageToQueue(true, Constants.CMDS.PLAYER_JOINED, { nickname: "rickd" });
        }

        /**
         * Start/Restart the game tick
         */

    }, {
        key: 'startGameClock',
        value: function startGameClock() {
            var that = this;
            (function animationLoop() {
                that.tick();

                if (that.isRunning) requestAnimationFrame(animationLoop);
            })();
        }

        /**
         * Called by NetChannel when it receives a command if it decides not to intercept it.
         * (For example CMDS.FULL_UPDATE is always intercepted, so it never calls this function, but CMDS.SERVER_MATCH_START is not intercepted so this function triggered)
         * @param messageData
         */

    }, {
        key: 'netChannelDidReceiveMessage',
        value: function netChannelDidReceiveMessage(messageData) {
            // OVERRIDE
        }
    }, {
        key: 'netChannelDidDisconnect',
        value: function netChannelDidDisconnect() {
            this.isRunning = false;
            this.stopGameClock();
        }

        ///// Memory

    }, {
        key: 'dealloc',
        value: function dealloc() {
            if (this.view) this.view.dealloc();
            this.view = null;

            _get(AbstractClientGame.prototype.__proto__ || Object.getPrototypeOf(AbstractClientGame.prototype), 'dealloc', this).call(this);
        }
    }]);

    return AbstractClientGame;
}(AbstractGame);

module.exports = AbstractClientGame;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldController = __webpack_require__(12);
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

var AbstractGame = function () {
    function AbstractGame() {
        _classCallCheck(this, AbstractGame);

        this.setupNetChannel();
        this.setupCmdMap();

        // Properties
        this.gameClockReal = 0; // Actual time via "new Date().getTime();"
        this.gameClock = 0; // Seconds since start
        this.gameTick = 0; // Ticks since start
        this.isRunning = true;
        this.speedFactor = 1; // Used to create Framerate Independent Motion (FRIM) - 1.0 means running at exactly the correct speed, 0.5 means half-framerate. (otherwise faster machines which can update themselves more accurately will have an advantage)
        this.intervalGameTick = null; // Setinterval for gametick
        this.intervalFramerate = 60; // Try to call our tick function this often, intervalFramerate, is used to determin how often to call settimeout - we can set to lower numbers for slower computers
        this.intervalTargetDelta = NaN; // this.targetDelta, milliseconds between frames. Normally it is 16ms or 60FPS. The framerate the game is designed against - used to create framerate independent motion
        this.gameDuration = Number.MAX_VALUE; // Gameduration

        this.netChannel = null; // ServerNetChannel / ClientNetChannel determined by subclass
        this.fieldController = new FieldController();

        return this;
    }

    _createClass(AbstractGame, [{
        key: 'setupNetChannel',


        /**
         * Setup the ClientNetChannel or ServerNetChannel
         */
        value: function setupNetChannel() {}

        /**
         * setup the command mapping for the events recevied from netchannel
         */

    }, {
        key: 'setupCmdMap',
        value: function setupCmdMap() {
            this.cmdMap = {};
        }

        // Methods

    }, {
        key: 'tick',
        value: function tick() {
            // Store previous time and update current
            var oldTime = this.gameClockReal;
            this.gameClockReal = new Date().getTime();

            // Our clock is zero based, so if for example it says 10,000 - that means the game started 10 seconds ago
            var delta = this.gameClockReal - oldTime;
            this.gameClock += delta;
            this.gameTick++;

            // Framerate Independent Motion -
            // 1.0 means running at exactly the correct speed, 0.5 means half-framerate. (otherwise faster machines which can update themselves more accurately will have an advantage)
            this.speedFactor = delta / this.intervalTargetDelta;
            if (this.speedFactor <= 0) this.speedFactor = 1;

            this.fieldController.tick(this.speedFactor, this.gameClockReal, this.gameTick);
        }

        /**
         * Start/Restart the game tick
         */

    }, {
        key: 'startGameClock',
        value: function startGameClock() {
            var that = this;
            this.gameClockReal = new Date().getTime();
            this.intervalTargetDelta = Math.floor(1000 / this.intervalFramerate);
            this.intervalGameTick = setInterval(function () {
                that.tick();
            }, this.intervalTargetDelta);
        }

        /**
         * Stop the game tick
         */

    }, {
        key: 'stopGameClock',
        value: function stopGameClock() {
            clearInterval(this.intervalGameTick);
            clearTimeout(this.intervalGameTick);
        }
    }, {
        key: 'setGameDuration',
        value: function setGameDuration() {}

        // Memory

    }, {
        key: 'dealloc',
        value: function dealloc() {
            if (this.netChannel) this.netChannel.dealloc();
            this.netChannel = null;

            clearInterval(this.intervalGameTick);
        }
    }, {
        key: 'log',
        value: function log() {}
        // OVERRIDE or USE CONSOLE.LOG


        ///// Accessors

    }, {
        key: 'getGameClock',
        value: function getGameClock() {
            return this.gameClock;
        }
    }, {
        key: 'getGameTick',
        value: function getGameTick() {
            return this.gameTick;
        }
    }]);

    return AbstractGame;
}();

module.exports = AbstractGame;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortedLookupTable = __webpack_require__(2);

var FieldController = function () {
    function FieldController() {
        _classCallCheck(this, FieldController);

        this.entities = new SortedLookupTable();
        this.players = new SortedLookupTable();
    }

    _createClass(FieldController, [{
        key: "tick",


        /**
         * Update all entities
         * @param {Number} speedFactor    A number signifying how much faster or slower we are moving than the target framerate
         * @param {Number} gameClock    Current game time in seconds (zero based)
         * @param {Number} gameTick        Current game tick (incrimented each frame)
         */
        value: function tick(speedFactor, gameClock, gameTick) {}
        // DO SOME STUFF


        /**
         * Internal function. Adds an entity to our collection, and adds it to the view if we have one
         * @param anEntity    An entity to add, should already be created and contain a unique entityid
         */

    }, {
        key: "addEntity",
        value: function addEntity(anEntity) {
            this.entities.setObjectForKey(anEntity, anEntity.entityid);

            // If we have a view, then add the player to it
            if (this.view) {
                this.view.addEntity(anEntity.getView());
            }
        }

        /**
         * Updates the entity based on new information (called by AbstractClientGame::renderAtTime)
         * @param {int}        entityid    entityid we want to update
         * @param {RealtimeMultiplayerGame.model.Point}    newPosition    position
         * @param {Number}    newRotation    rotation
         * @param {Object}    newEntityDescription The full contents of the the snapshots newEntityDescription
         */

    }, {
        key: "updateEntity",
        value: function updateEntity(entityid, newPosition, newRotation, newEntityDescription) {
            var entity = this.entities.objectForKey(entityid);

            if (entity != null) {
                entity.position.x = newPosition.x;
                entity.position.y = newPosition.y;
                entity.rotation = newRotation;
                entity.lastReceivedEntityDescription = newEntityDescription;
            } else {
                debugger;
                console.log("(FieldController)::updateEntity - Error: Cannot find entity with entityid", entityid);
            }
        }

        ///// Memory

    }, {
        key: "addPlayer",
        value: function addPlayer(aPlayerEntity) {
            this.addEntity(aPlayerEntity);
            this.players.setObjectForKey(aPlayerEntity, aPlayerEntity.clientid);
        }

        /**
         * Remove a player.
         * Does player stuff, then calls removeEntity.
         * @param clientid    ConnectionID of the player who jumped out of the game
         */

    }, {
        key: "removePlayer",
        value: function removePlayer(clientid) {
            var player = this.players.objectForKey(clientid);
            if (!player) {
                console.log("(FieldController), No 'Character' with clientid " + clientid + " ignoring...");
                return;
            }

            this.removeEntity(player.entityid);
            this.players.remove(player.clientid);
        }

        /**
         * Removes an entity by it's ID
         * @param entityid
         */

    }, {
        key: "removeEntity",
        value: function removeEntity(entityid) {
            var entity = this.entities.objectForKey(entityid);

            if (this.view) this.view.removeEntity(entity.view);

            entity.dealloc();
            this.entities.remove(entityid);
        }

        /**
         * Checks an array of "active entities", against the existing ones.
         * It's used to remove entities that expired in between two updates
         * @param activeEntities
         */

    }, {
        key: "removeExpiredEntities",
        value: function removeExpiredEntities(activeEntities) {
            var entityKeysArray = this.entities._keys;
            var i = entityKeysArray.length;
            var key;
            var totalRemoved = 0;

            while (i--) {
                key = entityKeysArray[i];

                // This entity is still active. Move along.
                if (activeEntities[key]) continue;

                // This entity is not active, check if it belongs to the server
                var entity = this.entities.objectForKey(key);
                var isPlayer = this.players.objectForKey(entity.clientid) != null;

                // Remove special way if player (which calls removeEntity on itself as well), or just remove it as an entity
                if (isPlayer) {
                    this.removePlayer(entity.clientid);
                } else {
                    this.removeEntity(entity.entityid);
                }

                totalRemoved++;
            }
        }
    }, {
        key: "dealloc",
        value: function dealloc() {
            this.players.forEach(function (key, entity) {
                this.removePlayer(entity.clientid);
            }, this);
            this.players.dealloc();
            this.players = null;

            this.entities.forEach(function (key, entity) {
                this.removeEntity(entity.entityid);
            }, this);
            this.entities.dealloc();
            this.entities = null;

            this.view = null;
        }

        ///// Accessors
        // Will be called on client side

    }, {
        key: "setView",
        value: function setView(aView) {
            this.view = aView;
        }
    }, {
        key: "getView",
        value: function getView() {
            return this.view;
        }
    }, {
        key: "getEntities",
        value: function getEntities() {
            return this.entities;
        }
    }, {
        key: "getPlayers",
        value: function getPlayers() {
            return this.players;
        }
    }, {
        key: "getEntityWithid",
        value: function getEntityWithid(anEntityid) {
            return this.entities.objectForKey(anEntityid);
        }
    }, {
        key: "getPlayerWithid",
        value: function getPlayerWithid(aClientid) {
            return this.players.objectForKey(aClientid);
        }
    }]);

    return FieldController;
}();

;

module.exports = FieldController;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global io */
var Constants = __webpack_require__(3);
var NetChannelMessage = __webpack_require__(14);
var SortedLookupTable = __webpack_require__(2);
/**
 File:
 ClientNetChannel.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 Communicates with the server and stores rolling world-entity-descriptions

 -> GameController talks to this object
 <--> ClientNetChannel waits to be ready, when it is
 <-- ClientNetChannel talks to the ServerNetChannel
 <--> ServerNetChannel does some stuff
 --> ServerNetChannel talks to ClientNetChannel
 --> ClientNetChannel talks to the GameController  --^

 Basic Usage:
 Create an object that conforms to the following protocol
 netChannelDidConnect();
 netChannelDidReceiveMessage();
 netChannelDidDisconnect();
 */

var ClientNetChannel = function () {
    function ClientNetChannel(aDelegate) {
        _classCallCheck(this, ClientNetChannel);

        this.delegate = null; // Object informed when ClientNetChannel does interesting stuff
        this.socketio = null; // Reference to singluar Socket.IO instance
        this.clientid = null; // A client id is set by the server on first connect

        this.cmdMap = {};

        // Settings
        this.cl_updateRate = Constants.CLIENT_SETTING.CMD_RATE, // How often we can receive messages per sec

        // connection info
        this.latency = 1000; // Current latency time from server
        this.lastSentTime = -1; // Time of last sent message
        this.lastRecievedTime = -1; // Time of last recieved message

        // Data
        this.messageBuffer = []; // Store last N messages to be sent
        this.outgoingSequenceNumber = 0;
        this.incomingWorldUpdateBuffer = []; // Store last N received WorldDescriptions
        this.reliableBuffer = null; // We sent a 'reliable' message and are waiting for acknowledgement that it was sent

        this.setDelegate(aDelegate);
        this.setupSocketIO();
        this.setupCmdMap();
        return this;
    }

    _createClass(ClientNetChannel, [{
        key: 'setupSocketIO',
        value: function setupSocketIO() {
            this.socketio = io(Constants.SERVER_SETTING.GET_URI());

            var that = this;
            this.socketio.on('connect', function () {
                that.onSocketConnect();
            });
            this.socketio.on('message', function (obj) {
                that.onSocketDidAcceptConnection(obj);
            });
            this.socketio.on('disconnect', function () {
                that.onSocketDisconnect();
            });
        }

        /**
         * Map RealtimeMultiplayerGame.Constants.CMDS to functions
         */

    }, {
        key: 'setupCmdMap',
        value: function setupCmdMap() {
            console.log("mapping cmds");
            console.log(Constants.CMDS);
            console.log(Constants.CMDS.SERVER_FULL_UPDATE);
            this.cmdMap[Constants.CMDS.SERVER_FULL_UPDATE] = this.onServerWorldUpdate;
            this.cmdMap[Constants.CMDS.PLAYER_JOINED] = this.onJoined;
        }

        ///// SocketIO Callbacks

    }, {
        key: 'onSocketConnect',
        value: function onSocketConnect() {
            console.log("(ClientNetChannel):onSocketConnect", arguments, this.socketio);
        }

        /**
         * Called when ServerNetChannel has accepted your connection and given you a client id
         * This is only called once, use the info to set some properties
         */

    }, {
        key: 'onSocketDidAcceptConnection',
        value: function onSocketDidAcceptConnection(aNetChannelMessage) {

            console.log("(ClientNetChannel)::onSocketDidAcceptConnection", aNetChannelMessage);

            // Should not have received this msg
            if (aNetChannelMessage.cmd != Constants.CMDS.SERVER_CONNECT) {
                throw "(ClientNetChannel):onSocketDidAcceptConnection recieved but cmd != SERVER_CONNECT ";
            }

            this.clientid = aNetChannelMessage.id;
            this.delegate.log("(ClientNetChannel)::ClientID - ");
            this.delegate.netChannelDidConnect(aNetChannelMessage);

            // Set onMessage function back to normal - removing event listener didn't work, so for now changing the mapping
            // TODO: Do via removeEvent
            //this.socketio.removeEvent("message", function( obj ){ that.onSocketDidAcceptConnection( obj ) });
            //this.socketio.on('message', function( obj ){ that.onSocketMessage( obj ) });
            this.onSocketDidAcceptConnection = this.onSocketMessage;
        }

        /**
         * Called when Socket.io has received a new message
         * @param aNetChannelMessage
         */

    }, {
        key: 'onSocketMessage',
        value: function onSocketMessage(aNetChannelMessage) {
            this.lastReceivedTime = this.delegate.getGameClock();
            this.adjustRate(aNetChannelMessage);

            if (aNetChannelMessage.id == this.clientid) // We sent this, clear our reliable buffer que
                {
                    if (aNetChannelMessage.cmd == Constants.CMDS.SERVER_FULL_UPDATE) {
                        console.log("this is a bug, set debugger here!");
                        //					debugger; //  IF CALLED THIS IS A BUG
                    }

                    var messageIndex = aNetChannelMessage.seq & Constants.CLIENT_SETTING.MAX_BUFFER;
                    var message = this.messageBuffer[messageIndex];

                    // Free up reliable buffer to allow for new message to be sent
                    if (this.reliableBuffer === message) {
                        this.reliableBuffer = null;
                    }

                    // Remove from memory
                    this.messageBuffer[messageIndex] = null;
                    message = null;

                    return;
                }

            // Call the mapped function
            if (this.cmdMap[aNetChannelMessage.cmd]) {
                this.cmdMap[aNetChannelMessage.cmd].call(this, aNetChannelMessage);
            } else {
                console.log("(NetChannel)::onSocketMessage CLIENT could not map '" + aNetChannelMessage.cmd + "' to function!");
                console.log("map contains");
                console.log(this.cmdMap);
            }
        }
    }, {
        key: 'onSocketDisconnect',
        value: function onSocketDisconnect() {
            this.delegate.netChannelDidDisconnect();
            this.connection = null;
            this.socketio = null;
            console.log("(ClientNetChannel)::onSocketDisconnect", arguments);
        }

        /**
         * Send queued messages
         */

    }, {
        key: 'tick',
        value: function tick() {
            // Can't send new message, still waiting for last imporant message to be returned
            if (this.reliableBuffer !== null) return;

            var hasReliableMessages = false;
            var firstUnreliableMessageFound = null;

            var len = this.messageBuffer.length;
            for (var i = 0; i < len; i++) {
                var message = this.messageBuffer[i];
                if (!message) continue; // Slot is empty

                // We have more important things to tend to sir.
                if (message.isReliable) {
                    hasReliableMessages = true;
                    this.sendMessage(message);
                    return;
                }
            }

            // No reliable messages waiting, enough time has passed to send an update
            if (!hasReliableMessages && this.canSendMessage() && this.nextUnreliable != null) {
                this.sendMessage(this.nextUnreliable);
                this.nextUnreliable = null;
            }
        }
    }, {
        key: 'onJoined',
        value: function onJoined(msg) {
            console.log("client joined");
            console.log(msg);
        }

        /**
         *
         * @param aNetChannelMessage
         */

    }, {
        key: 'onServerWorldUpdate',
        value: function onServerWorldUpdate(aNetChannelMessage) {
            var len = aNetChannelMessage.data.length;
            var i = -1;

            // Store all world updates contained in the message.
            while (++i < len) // Want to parse through them in correct order, so no fancy --len
            {
                var singleWorldUpdate = aNetChannelMessage.data[i];
                var worldEntityDescription = this.createWorldEntityDescriptionFromString(singleWorldUpdate);

                // Add it to the incommingCmdBuffer and drop oldest element
                this.incomingWorldUpdateBuffer.push(worldEntityDescription);
                if (this.incomingWorldUpdateBuffer.length > Constants.CLIENT_SETTING.MAX_BUFFER) this.incomingWorldUpdateBuffer.shift();
            }
        }

        /**
         * Takes a WorldUpdateMessage that contains the information about all the elements inside of a string
         * and creates SortedLookupTable out of it with the entityid's as the keys
         * @param {String} aWorldUpdateMessage
         */

    }, {
        key: 'createWorldEntityDescriptionFromString',
        value: function createWorldEntityDescriptionFromString(aWorldUpdateMessage) {
            // Create a new WorldEntityDescription and store the clock and gametick in it
            var worldDescription = new SortedLookupTable();
            worldDescription.gameTick = aWorldUpdateMessage.gameTick;
            worldDescription.gameClock = aWorldUpdateMessage.gameClock;

            var allEntities = aWorldUpdateMessage.entities.split('|'),
                allEntitiesLen = allEntities.length; //

            // Loop through each entity
            while (--allEntitiesLen) // allEntities[0] is garbage, so by using prefix we avoid it
            {
                // Loop through the string representing the entities properties
                var entityDescAsArray = allEntities[allEntitiesLen].split(',');
                var entityDescription = this.delegate.parseEntityDescriptionArray(entityDescAsArray);

                // Store the final result using the entityid
                worldDescription.setObjectForKey(entityDescription, entityDescription.entityid);
            }

            return worldDescription;
        }

        /**
         * Sends a message via socket.io
         * @param aMessageInstance
         */

    }, {
        key: 'sendMessage',
        value: function sendMessage(aMessageInstance) {
            if (this.socketio == undefined) {
                console.log("(ClientNetChannel)::sendMessage - socketio is undefined!");
                return;
            }

            if (!this.socketio.connected) {
                // Socket.IO is not connectd, probably not ready yet
                // console.log("(ClientNetChannel)::sendMessage - socketio is undefined!");
                return; //some error here
            }

            aMessageInstance.messageTime = this.delegate.getGameClock(); // Store to determine latency

            this.lastSentTime = this.delegate.getGameClock();

            if (aMessageInstance.isReliable) {
                this.reliableBuffer = aMessageInstance; // Block new connections
            }

            this.socketio.json.send(aMessageInstance);

            if (Constants.CLIENT_NETCHANNEL_DEBUG) console.log('(NetChannel) Sending Message, isReliable', aMessageInstance.isReliable, aMessageInstance);
        }

        /**
         * Prepare a message for sending at next available time
         * @param isReliable
         * @param anUnencodedMessage
         */

    }, {
        key: 'addMessageToQueue',
        value: function addMessageToQueue(isReliable, aCommandConstant, payload) {
            // Create a NetChannelMessage
            var message = new NetChannelMessage(this.outgoingSequenceNumber, this.clientid, isReliable, aCommandConstant, payload);

            // Add to array the queue using bitmask to wrap values
            this.messageBuffer[this.outgoingSequenceNumber & Constants.CLIENT_SETTING.MAX_BUFFER] = message;

            if (!isReliable) {
                this.nextUnreliable = message;
            }

            ++this.outgoingSequenceNumber;
            if (Constants.DEBUG_SETTING.CLIENT_NETCHANNEL_DEBUG) console.log('(NetChannel) Adding Message to queue', this.messageBuffer[this.outgoingSequenceNumber & Constants.CLIENT_SETTING.MAX_BUFFER], " ReliableBuffer currently contains: ", this.reliableBuffer);
        }

        /**
         * Adjust the message chokerate based on latency
         * @param serverMessage
         */

    }, {
        key: 'adjustRate',
        value: function adjustRate(serverMessage) {
            var deltaTime = serverMessage.gameClock - this.delegate.getGameClock();
            this.latency = deltaTime;

            // TODO: Adjust cl_updateRate based on message thruput
            //		time -= 100; // Subtract 100ms
            //		if(this.)
            //		console.log('Time:', time)
            // time -= 0.1; // subtract 100ms
            //
            // if(time <= 0)
            // {
            // 	this.rate = 0.12; /* 60/1000*2 */
            // }
            // else
            // {
            // }
        }

        ///// Memory
        /**
         * Clear memory
         */

    }, {
        key: 'dealloc',
        value: function dealloc() {
            this.connection.close();
            this.connection = null;
            this.messageBuffer = null;
            this.incomingWorldUpdateBuffer = null;
        }

        ///// Accessors
        /**
         * Set the NetChannelDelegate after validation
         * @param aDelegate
         */

    }, {
        key: 'setDelegate',
        value: function setDelegate(aDelegate) {
            //Don't run checks, just make sure your delegate conforms
            this.delegate = aDelegate;
        }

        /**
         * Determines if it's ok for the client to send a unreliable new message yet
         */

    }, {
        key: 'canSendMessage',
        value: function canSendMessage() {
            var isReady = this.delegate.getGameClock() > this.lastSentTime + this.cl_updateRate;
            return isReady;
        }
    }, {
        key: 'getClientid',
        value: function getClientid() {
            return this.clientid;
        }
    }, {
        key: 'getIncomingWorldUpdateBuffer',
        value: function getIncomingWorldUpdateBuffer() {
            return this.incomingWorldUpdateBuffer;
        }
    }, {
        key: 'getLatency',
        value: function getLatency() {
            return this.latency;
        }
    }]);

    return ClientNetChannel;
}();

;

module.exports = ClientNetChannel;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 File:
 NetChannelMessage.js
 Created By:
 Mario Gonzalez
 Project:
 RealtimeMultiplayerNodeJS
 Abstract:
 A common class for sending messages between ServerNetChannel / ClientNetChannel
 It is a small value-object wrapper which contains a sequence number and clientid
 Basic Usage:
 // Create the data that will live in the message
 var command = {};
 // Fill in the data
 command.cmd = aCommandConstant;
 command.data = {x:1, y:1};

 // Create the message
 var message = new Message(this.outgoingSequence, true, command)

 // Send the message (can happen later on)
 message.messageTime = this.realTime; // Store to determin latency

 (from netchannel)
 this.connection.send(message.encodedSelf());
 };
 */
var NetChannelMessage = function () {

    /**
     * Creates a NetChannelMessage
     * @param aSequenceNumber        A sequence number, used to track messages between server / client
     * @param isReliable            A message is 'reliable' if it must be sent, for example fireweapon / disconnect. It is 'unreliable', if it can be overwritten with newer data, i.e. currentPosition
     * @param aPayload                The message to send
     */
    //var message = new RealtimeMultiplayerGame.model.NetChannelMessage( this.outgoingSequenceNumber, this.clientID, isReliable, aCommandConstant, payload );
    function NetChannelMessage(aSequenceNumber, aClientid, isReliable, aCommandType, aPayload) {
        _classCallCheck(this, NetChannelMessage);

        this.isReliable = false;
        this.cmd = 0;
        this.aPayload = null;
        this.seq = -1;
        this.id = -1;
        this.messageTime = -1;

        // Info
        this.seq = aSequenceNumber;
        this.id = aClientid; // Server gives us one when we first  connect to it
        this.cmd = aCommandType;

        // Data
        this.payload = aPayload;

        // State
        this.messageTime = -1;
        this.isReliable = isReliable;

        // This message MUST be sent if it is 'reliable' (Connect / Disconnect).
        // If not it can be overwritten by newer messages (for example moving is unreliable, because once it's outdates its worthless if new information exist)
    }

    _createClass(NetChannelMessage, [{
        key: "encodeSelf",


        /**
         * Wrap the message with useful information before sending, optional BiSON or something can be used to compress the message
         */
        value: function encodeSelf() {
            if (this.id == -1) {
                console.log("(Message) Sending message without clientid. Note this is ok, if it's the first message to the server.");
            }

            if (this.messageTime == -1) {
                console.log("(Message) Sending message without messageTime. Expected result is undefined");
            }

            return { id: this.clientid, seq: this.sequenceNumber, cmds: this.unencodedMessage, t: this.messageTime };
        }
    }]);

    return NetChannelMessage;
}();

module.exports = NetChannelMessage;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constants = __webpack_require__(0);
var CircleEntity = __webpack_require__(4);
var Point = __webpack_require__(1);
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

var PlayerEntity = function (_CircleEntity) {
    _inherits(PlayerEntity, _CircleEntity);

    function PlayerEntity(anEntityid, aClientid) {
        var _ret;

        _classCallCheck(this, PlayerEntity);

        var _this = _possibleConstructorReturn(this, (PlayerEntity.__proto__ || Object.getPrototypeOf(PlayerEntity)).call(this, anEntityid, aClientid));

        _this.entityid = anEntityid;
        _this.entityType = Constants.PLAYER_ENTITY;

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PlayerEntity, [{
        key: 'updateView',
        value: function updateView() {
            _get(PlayerEntity.prototype.__proto__ || Object.getPrototypeOf(PlayerEntity.prototype), 'updateView', this).call(this);
        }
    }, {
        key: 'setInput',
        value: function setInput(input) {
            this.input = input;
        }
    }, {
        key: 'updatePosition',
        value: function updatePosition() {
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
            this.acceleration.setPos(0, 0);
            this.collisionCircle.position.translatePoint(this.velocity);
            this.position = this.collisionCircle.position.clone();
        }
    }, {
        key: 'setCollisionCircle',
        value: function setCollisionCircle(aCollisionCircle) {
            _get(PlayerEntity.prototype.__proto__ || Object.getPrototypeOf(PlayerEntity.prototype), 'setCollisionCircle', this).call(this, aCollisionCircle);
            //	this.collisionCircle.setIsFixed( true );
        }

        /**
         * Deallocate memory
         */

    }, {
        key: 'dealloc',
        value: function dealloc() {
            if (this.input) {
                this.input.dealloc();
                delete this.input;
            }
            _get(PlayerEntity.prototype.__proto__ || Object.getPrototypeOf(PlayerEntity.prototype), 'dealloc', this).call(this);
        }
    }]);

    return PlayerEntity;
}(CircleEntity);

module.exports = PlayerEntity;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseTrait = __webpack_require__(17);
var Keyboard = __webpack_require__(18);
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

var KeyboardInputTrait = function (_BaseTrait) {
    _inherits(KeyboardInputTrait, _BaseTrait);

    function KeyboardInputTrait() {
        _classCallCheck(this, KeyboardInputTrait);

        var _this = _possibleConstructorReturn(this, (KeyboardInputTrait.__proto__ || Object.getPrototypeOf(KeyboardInputTrait)).call(this));

        _this.displayName = "KeyboardInputTrait"; // Unique string name for this Trait
        return _this;
    }

    /**
     * Attach the trait to the host object
     * @param anEntity
     */


    _createClass(KeyboardInputTrait, [{
        key: 'attach',
        value: function attach(anEntity) {
            _get(KeyboardInputTrait.prototype.__proto__ || Object.getPrototypeOf(KeyboardInputTrait.prototype), 'attach', this).call(this, anEntity);

            // Intercept those two properties from the attached enitity with our own
            this.intercept(['constructEntityDescription', 'handleInput']);
            this.attachedEntity.input = new Keyboard();
            this.attachedEntity.input.attachEvents();
        }

        /**
         * Implement our own intercepted version of the methods/properties
         */

    }, {
        key: 'constructEntityDescription',
        value: function constructEntityDescription(gameTick, wantsFullUpdate) {
            return {
                entityid: this.entityid,
                input: this.input.constructInputBitmask()
            };
        }

        // Do nothing

    }, {
        key: 'handleInput',
        value: function handleInput(gameClock) {}
    }]);

    return KeyboardInputTrait;
}(BaseTrait);

module.exports = KeyboardInputTrait;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortedLookupTable = __webpack_require__(2);

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

var BaseTrait = function () {
    function BaseTrait() {
        _classCallCheck(this, BaseTrait);

        this.interceptedProperties = null; // SortedLookupTable of traits we've intercepted so they can be applied back
        this.attachedEntity = null; // Trait host
        this.detachTimeout = 0; // Store detach setTimeout
        this.displayName = "BaseTrait"; // Unique string name for this Trait
        this.interceptedProperties = new SortedLookupTable();

        // If a trait can stack, then it doesn't matter if it's already attached.
        // If it cannot stack, it is not applied if it's currently active.
        // For example, you can not be frozen after being frozen.
        // However you can be sped up multiple times
        //canStack: false,
        this.canStack = false;
    }

    /**
     * Attach the trait to the host object
     * @param anEntity
     */


    _createClass(BaseTrait, [{
        key: "attach",
        value: function attach(anEntity) {
            this.attachedEntity = anEntity;
        }

        /**
         * Execute the trait
         * For example if you needed to cause an animation to start when a character is 'unfrozen', this is when you would do it
         */

    }, {
        key: "execute",
        value: function execute() {}

        /**
         * Detaches a trait from an 'attachedEntity' and restores the properties
         */

    }, {
        key: "detach",
        value: function detach(force) {
            clearTimeout(this.detachTimeout);
            this.restore();

            this.interceptedProperties.dealloc();
            this.interceptProperties = null;
            this.attachedEntity = null;
        }

        /**
         * Detach after N milliseconds, for example freeze trait might call this to unfreeze
         * @param aDelay
         */

    }, {
        key: "detachAfterDelay",
        value: function detachAfterDelay(aDelay) {
            var that = this;
            this.detachTimeout = setTimeout(function () {
                that.attachedEntity.removeTraitWithName(that.displayName);
            }, aDelay);
        }

        /**
         * Intercept properties from the entity we are attached to.
         * For example, if we intercept handleInput, then our own 'handleInput' function gets called.
         * We can reset all the properties by calling, this.restore();
         * @param arrayOfProperties
         */

    }, {
        key: "intercept",
        value: function intercept(arrayOfProperties) {
            var len = arrayOfProperties.length;
            while (len--) {
                var aKey = arrayOfProperties[len];
                this.interceptedProperties.setObjectForKey(this.attachedEntity[aKey], aKey);
                this.attachedEntity[aKey] = this[aKey];
            }
        }

        /**
         * Restores traits that were intercepted.
         * Be sure to call this when removing the trait!
         */

    }, {
        key: "restore",
        value: function restore() {
            this.interceptedProperties.forEach(function (key, aStoredProperty) {
                this.attachedEntity[key] = aStoredProperty;
            }, this);
        }
    }]);

    return BaseTrait;
}();

module.exports = BaseTrait;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = __webpack_require__(3);

var Keyboard = function () {
    function Keyboard() {
        _classCallCheck(this, Keyboard);

        this.keyCodes = { '16': 'shift', '32': 'space', '37': 'left', '38': 'up', '39': 'right', '40': 'down', '9': 'tab' };
        this.keyPressed = 0;
        this.keys = { 'tab': false, 'shift': false, 'space': false, 'up': false, 'down': false, 'left': false, "right": false };
    }

    _createClass(Keyboard, [{
        key: 'dealloc',
        value: function dealloc() {
            // TODO: remove keyup/keydown events
        }
    }, {
        key: 'keyDown',
        value: function keyDown(e) {
            if (e.keyCode in this.keyCodes) {
                // if we're already pressing down on the same key, then we don't want to increment
                // our key pressed count
                if (!this.keys[this.keyCodes[e.keyCode]]) {
                    this.keyPressed++;
                }

                this.handler(e.keyCode, true);
                e.preventDefault();
            }
        }
    }, {
        key: 'keyUp',
        value: function keyUp(e) {
            if (e.keyCode in this.keyCodes) {
                this.handler(e.keyCode, false);
                this.keyPressed--;
                e.preventDefault();
            }
        }

        /**
         * Attach events to the HTML element
         * We don't care about a time clock here, we attach events, we only want
         * to know if something's happened.
         */

    }, {
        key: 'attachEvents',
        value: function attachEvents() {
            var that = this;
            document.addEventListener('keydown', function (e) {
                that.keyDown(e);
            }, false);
            document.addEventListener('keyup', function (e) {
                that.keyUp(e);
            }, false);
        }
    }, {
        key: 'isKeyPressed',
        value: function isKeyPressed() {
            return this.keyPressed > 0;
        }

        /**
         * Map it to something useful so we know what it is
         */

    }, {
        key: 'handler',
        value: function handler(keyCode, enabled) {
            this.keys[this.keyCodes[keyCode]] = enabled;
        }

        /**
         * Constructs a bitmask based on current keyboard state
         * @return A bitfield containing input states
         */

    }, {
        key: 'constructInputBitmask',
        value: function constructInputBitmask() {
            var input = 0;

            // Check each key
            if (this.keys['up']) input |= Constants.INPUT_BITMASK.UP;
            if (this.keys['down']) input |= Constants.INPUT_BITMASK.DOWN;
            if (this.keys['left']) input |= Constants.INPUT_BITMASK.LEFT;
            if (this.keys['right']) input |= Constants.INPUT_BITMASK.RIGHT;
            if (this.keys['space']) input |= Constants.INPUT_BITMASK.SPACE;
            if (this.keys['shift']) input |= Constants.INPUT_BITMASK.SHIFT;
            if (this.keys['tab']) input |= Constants.INPUT_BITMASK.TAB;

            return input;
        }

        /**
         * Sets the 'key down' properties based on an input mask
         * @param inputBitmask    A bitfield containing input flags
         */

    }, {
        key: 'deconstructInputBitmask',
        value: function deconstructInputBitmask(inputBitmask) {
            this.keys['up'] = inputBitmask & Constants.INPUT_BITMASK.UP;
            this.keys['down'] = inputBitmask & Constants.INPUT_BITMASK.DOWN;
            this.keys['left'] = inputBitmask & Constants.INPUT_BITMASK.LEFT;
            this.keys['right'] = inputBitmask & Constants.INPUT_BITMASK.RIGHT;
            this.keys['space'] = inputBitmask & Constants.INPUT_BITMASK.SPACE;
            this.keys['shift'] = inputBitmask & Constants.INPUT_BITMASK.SHIFT;
        }

        /**
         * Accessors
         */
        // Some helper methods to find out if we're going in a specific direction

    }, {
        key: 'isLeft',
        value: function isLeft() {
            return this.keys['left'];
        }
    }, {
        key: 'isUp',
        value: function isUp() {
            return this.keys['up'];
        }
    }, {
        key: 'isRight',
        value: function isRight() {
            return this.keys['right'];
        }
    }, {
        key: 'isDown',
        value: function isDown() {
            return this.keys['down'];
        }
    }, {
        key: 'isSpace',
        value: function isSpace() {
            return this.keys['space'];
        }
    }, {
        key: 'isShift',
        value: function isShift() {
            return this.keys['shift'];
        }
    }, {
        key: 'isTab',
        value: function isTab() {
            return this.keys['tab'];
        }
    }]);

    return Keyboard;
}();

module.exports = Keyboard;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map