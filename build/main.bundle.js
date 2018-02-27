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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DemoClientGame = __webpack_require__(1);

var _DemoClientGame2 = _interopRequireDefault(_DemoClientGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var WEB_SOCKET_SWF_LOCATION = "ABC";
    // Callback for when browse is ready
    var onDocumentReady = function onDocumentReady() {
        var clientGame = new _DemoClientGame2.default();
    };

    // Listen for ready
    window.addEventListener('load', onDocumentReady, false);
})();

/***/ }),
/* 1 */
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

var DemoClientGame = function (_RealtimeMultiplayerG) {
    _inherits(DemoClientGame, _RealtimeMultiplayerG);

    function DemoClientGame() {
        var _ret;

        _classCallCheck(this, DemoClientGame);

        var _this = _possibleConstructorReturn(this, (DemoClientGame.__proto__ || Object.getPrototypeOf(DemoClientGame)).call(this));

        _this.startGameClock();
        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DemoClientGame, [{
        key: "setupView",
        value: function setupView() {
            this.view = new DemoApp.DemoView();
            this.view.insertIntoHTMLElementWithId("gamecontainer");

            _get(DemoClientGame.prototype.__proto__ || Object.getPrototypeOf(DemoClientGame.prototype), "setupView", this).call(this, this);
        }
    }, {
        key: "tick",


        /**
         * @inheritDoc
         */
        value: function tick() {
            this.superclass.tick.call(this);
            this.view.stats.update();
            this.view.update(this.gameClockReal);
        }
    }, {
        key: "createEntityFromDesc",


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
        key: "parseEntityDescriptionArray",


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
        key: "netChannelDidConnect",


        /**
         * @inheritDoc
         */
        value: function netChannelDidConnect(messageData) {
            this.superclass.netChannelDidConnect.call(this, messageData);
            this.prototype.log("this: Joining Game");
            this.joinGame("Player" + this.netChannel.getClientid()); // Automatically join the game with some name
        }
    }, {
        key: "netChannelDidDisconnect",


        /**
         * @inheritDoc
         */
        value: function netChannelDidDisconnect(messageData) {
            this.superclass.netChannelDidDisconnect.call(this, messageData);
            this.prototype.log("this: netChannelDidDisconnect"); // Display disconnect
        }
    }, {
        key: "log",


        /**
         * This function logs something to the right panel
         * @param {Object} An object in the form of: { message: ['Client', 'domReady'] }
         */
        value: function log(msg) {
            console.log("DemoClientGame: " + msg);
        }
    }]);

    return DemoClientGame;
}(RealtimeMultiplayerGame.AbstractClientGame);

exports.default = DemoClientGame;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map