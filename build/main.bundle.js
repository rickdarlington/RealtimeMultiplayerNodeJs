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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
module.exports = function () {
    var Constants = function Constants() {
        _classCallCheck(this, Constants);
    };

    Constants.ENTITY_DEFAULT_RADIUS = 8;
    Constants.GAME_WIDTH = 700;
    Constants.GAME_HEIGHT = 450;
    Constants.MAX_CIRCLES = 100;
    Constants.GAME_DURATION = 1000 * 300;
    Constants.UNKNOWN = 1 << 0;
    Constants.GENERIC_CIRCLE = 1 << 1;
    Constants.PLAYER_ENTITY = 1 << 2;

    Constants.ENTITY_TYPES = {};
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DemoClientGame = __webpack_require__(2);

(function () {
    var onDocumentReady = function onDocumentReady() {
        var clientGame = new DemoClientGame();
    };

    window.addEventListener('load', onDocumentReady, false);
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constants = __webpack_require__(0);
var CircleEntity = __webpack_require__(3);
var DemoView = __webpack_require__(4);
var AbstractClientGame = __webpack_require__(5);

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

            // Create a view via CAAT
            var aCircleView = new CAAT.ShapeActor();
            aCircleView.create();
            aCircleView.setSize(diameter, diameter);
            aCircleView.setFillStyle("#" + CAAT.Color.prototype.hsvToRgb(entityDesc.entityid * 15 % 360, 40, 99).toHex()); // Random color
            aCircleView.setLocation(entityDesc.x, entityDesc.y); // Place in the center of the screen, use the director's width/height

            var newEntity = null;

            var isOwnedByMe = entityDesc.clientid == this.netChannel.clientid;
            // If this is a player entity
            if (entityDesc.entityType & Constants.ENTITY_TYPES.PLAYER_ENTITY) {
                newEntity = new PlayerEntity(entityDesc.entityid, entityDesc.clientid);

                // If it is a player entity and it's my player entity - attach a KeyboardInputTrait to it
                if (isOwnedByMe) {
                    newEntity.addTraitAndExecute(new RealtimeMultiplayerGame.controller.traits.KeyboardInputTrait());
                    this.clientCharacter = newEntity;
                }
            } else {
                newEntity = new CircleEntity(entityDesc.entityid, entityDesc.clientid);
            }

            newEntity.position.set(entityDesc.x, entityDesc.y);
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

exports.default = DemoClientGame;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameEntity = __webpack_require__(8);
var Constants = __webpack_require__(0);
var Point = __webpack_require__(7);
var Noise = __webpack_require__(9);

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
        // radius: Constants.ENTITY_DEFAULT_RADIUS,
        // velocity: RealtimeMultiplayerGame.model.Point.prototype.ZERO,
        // acceleration: RealtimeMultiplayerGame.model.Point.prototype.ZERO,
        // collisionCircle: null,										// An instance of RealtimeMultiplayerGame.modules.circlecollision.PackedCircle
        // entityType: Constants.GENERIC_CIRCLE,


        _this.nOffset = Math.random() * 2000;

        _this.setColor("FFFFFF");
        _this.velocity = new Point(0, 0);
        _this.acceleration = new Point(0, 0);
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
            this.acceleration.set(0, 0);
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = __webpack_require__(0);
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

var DemoView = function () {
    function DemoView() {
        _classCallCheck(this, DemoView);

        this.setupCAAT();
        this.setupStats();
        this.caatDirector = null; // CAAT Director instance
        this.caatScene = null; // CAAT Scene instance
        this.stats = null; // Stats.js instance
    }

    _createClass(DemoView, [{
        key: 'setupCAAT',


        // Methods
        value: function setupCAAT() {
            this.caatScene = new CAAT.Scene(); // Create a scene, all directors must have at least one scene - this is where all your stuff goes
            this.caatScene.create(); // Notice we call create when creating this, and ShapeActor below. Both are Actors
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
            this.director.destroy();
        }
    }]);

    return DemoView;
}();

exports.default = DemoView;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractGame = __webpack_require__(6);

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
            _get(AbstractClientGame.prototype.__proto__ || Object.getPrototypeOf(AbstractClientGame.prototype), 'setupNetChannel', this).call(this);
            this.netChannel = new RealtimeMultiplayerGame.ClientNetChannel(this);
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
                this.netChannel.addMessageToQueue(false, RealtimeMultiplayerGame.Constants.CMDS.PLAYER_UPDATE, input);
            }

            // Draw the gameworld
            this.renderAtTime(this.gameClock - RealtimeMultiplayerGame.Constants.CLIENT_SETTING.INTERP - RealtimeMultiplayerGame.Constants.CLIENT_SETTING.FAKE_LAG);
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
            var newPosition = new RealtimeMultiplayerGame.model.Point(0, 0),
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
                //					if(++this.locateUpdateFailedCount === RealtimeMultiplayerGame.Constants.CLIENT_SETTING.MAX_UPDATE_FAILURE_COUNT) {
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
            var entityPositionPast = new RealtimeMultiplayerGame.model.Point(0, 0),
                entityRotationPast = 0;

            var entityPositionFuture = new RealtimeMultiplayerGame.model.Point(0, 0),
                entityRotationFuture = 0;

            // Update players
            nextWED.forEach(function (key, entityDesc) {
                // Catch garbage values
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
                    entityPositionPast.set(previousEntityDescription.x, previousEntityDescription.y);
                    entityRotationPast = previousEntityDescription.rotation;

                    entityPositionFuture.set(entityDesc.x, entityDesc.y);
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
            if (this.gameTick % RealtimeMultiplayerGame.Constants.CLIENT_SETTING.EXPIRED_ENTITY_CHECK_RATE === 0) this.fieldController.removeExpiredEntities(activeEntities);
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
            this.netChannel.addMessageToQueue(true, RealtimeMultiplayerGame.Constants.CMDS.PLAYER_JOINED, { nickname: this.nickname });
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

exports.default = AbstractClientGame;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        this.fieldController = new RealtimeMultiplayerGame.Controller.FieldController();

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
        this.fieldController = null; // FieldController
        this.cmdMap = {};

        return this;
    }

    _createClass(AbstractGame, [{
        key: "setupNetChannel",


        /**
         * Setup the ClientNetChannel or ServerNetChannel
         */
        value: function setupNetChannel() {}

        /**
         * setup the command mapping for the events recevied from netchannel
         */

    }, {
        key: "setupCmdMap",
        value: function setupCmdMap() {
            this.cmdMap = {};
        }

        // Methods

    }, {
        key: "tick",
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
        key: "startGameClock",
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
        key: "stopGameClock",
        value: function stopGameClock() {
            clearInterval(this.intervalGameTick);
            clearTimeout(this.intervalGameTick);
        }
    }, {
        key: "setGameDuration",
        value: function setGameDuration() {}

        // Memory

    }, {
        key: "dealloc",
        value: function dealloc() {
            if (this.netChannel) this.netChannel.dealloc();
            this.netChannel = null;

            clearInterval(this.intervalGameTick);
        }
    }, {
        key: "log",
        value: function log() {}
        // OVERRIDE or USE CONSOLE.LOG


        ///// Accessors

    }, {
        key: "getGameClock",
        value: function getGameClock() {
            return this.gameClock;
        }
    }, {
        key: "getGameTick",
        value: function getGameTick() {
            return this.gameTick;
        }
    }]);

    return AbstractGame;
}();

module.exports = AbstractGame;

/***/ }),
/* 7 */
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
        key: "set",
        value: function set(x, y) {
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
            var p = new RealtimeMultiplayerGame.model.Point();
            p.set(this.x, this.y);
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
            return new RealtimeMultiplayerGame.model.Point(this.x - aPoint.x, this.y - aPoint.y);
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
            return "(RealtimeMultiplayerGame.model.Point)" + " x:'" + String(Math.round(Math.floor(this.x * 10)) / 10) + " y:" + String(Math.round(Math.floor(this.y * 10)) / 10);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = __webpack_require__(7);

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
        this.position = new Point(0, 0).ZERO; // Current position of this entity
        this.rotation = 0;
        this.traits = null; // An array of our traits; in reverse added order
        this.view = null;
        this.lastReceivedEntityDescription = null; // The last received entity description (set by renderAtTime)

        this.clientid = aClientid;
        this.entityid = anEntityid;
        this.traits = [];
        this.position = new Point(0, 0);
        return this;
    }

    _createClass(GameEntity, [{
        key: "updateView",


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
        key: "updatePosition",
        value: function updatePosition(speedFactor, gameClock, gameTick) {}
        // OVERRIDE


        /**
         * Construct an entity description for this object, it is essentually a CSV so you have to know how to read it on the receiving end
         * @param wantsFullUpdate    If true, certain things that are only sent when changed are always sent
         */

    }, {
        key: "constructEntityDescription",
        value: function constructEntityDescription(gameTick, wantsFullUpdate) {
            // Note: "~~" is just a way to round the value without the Math.round function call
            var returnString = this.entityid;
            returnString += "," + this.clientid;
            returnString += "," + this.entityType;
            returnString += "," + ~~this.position.x;
            returnString += "," + ~~this.position.y;

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
        key: "addTrait",
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
        key: "addTraitAndExecute",
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
        key: "removeTraitWithName",
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
        key: "removeAllTraits",
        value: function removeAllTraits() {
            var i = this.traits.length;
            while (i--) {
                this.traits[i].detach();
            }

            this.traits = [];
        }

        ///// MEMORY

    }, {
        key: "dealloc",
        value: function dealloc() {
            this.position = null;
            this.removeAllTraits();
            this.traits = null;
        }

        ////// ACCESSORS

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
        /**
         * Returns a trait with a matching .displayName property
         * @param aTraitName
         */

    }, {
        key: "getTraitWithName",
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
    }]);

    return GameEntity;
}();

module.exports = GameEntity;

/***/ }),
/* 9 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map