var Constants = require('../model/Constants');

class Keyboard {
    constructor() {
        this.keyCodes = { '16': 'shift', '32': 'space', '37': 'left', '38': 'up', '39': 'right', '40': 'down', '9': 'tab'};
        this.keyPressed = 0;
        this.keys = {'tab': false, 'shift': false, 'space': false, 'up': false, 'down': false, 'left': false, "right": false };
    }

    dealloc() {
        // TODO: remove keyup/keydown events
    }

    keyDown(e) {
        if (e.keyCode in this.keyCodes) {
            // if we're already pressing down on the same key, then we don't want to increment
            // our key pressed count
            if (!this.keys[ this.keyCodes[ e.keyCode ] ]) {
                this.keyPressed++;
            }

            this.handler(e.keyCode, true);
            e.preventDefault();
        }
    }
    keyUp(e) {
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
    attachEvents() {
        var that = this;
        document.addEventListener('keydown', function (e) {
            that.keyDown(e);
        }, false);
        document.addEventListener('keyup', function (e) {
            that.keyUp(e);
        }, false);
    }

    isKeyPressed() {
        return this.keyPressed > 0;
    }

    /**
     * Map it to something useful so we know what it is
     */
    handler(keyCode, enabled) {
        this.keys[ this.keyCodes[ keyCode] ] = enabled;
    }

    /**
     * Constructs a bitmask based on current keyboard state
     * @return A bitfield containing input states
     */
    constructInputBitmask() {
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
    deconstructInputBitmask(inputBitmask) {
        this.keys['up'] = (inputBitmask & Constants.INPUT_BITMASK.UP);
        this.keys['down'] = (inputBitmask & Constants.INPUT_BITMASK.DOWN);
        this.keys['left'] = (inputBitmask & Constants.INPUT_BITMASK.LEFT);
        this.keys['right'] = (inputBitmask & Constants.INPUT_BITMASK.RIGHT);
        this.keys['space'] = (inputBitmask & Constants.INPUT_BITMASK.SPACE);
        this.keys['shift'] = (inputBitmask & Constants.INPUT_BITMASK.SHIFT);
    }

    /**
     * Accessors
     */
    // Some helper methods to find out if we're going in a specific direction
    isLeft() {
        return this.keys['left'];
    }
    isUp() {
        return this.keys['up'];
    }
    isRight() {
        return this.keys['right'];
    }
    isDown() {
        return this.keys['down'];
    }
    isSpace() {
        return this.keys['space'];
    }
    isShift() {
        return this.keys['shift'];
    }
    isTab() {
        return this.keys['tab'];
    }
}