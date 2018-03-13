/**
 ####  #####  ##### ####    ###  #   # ###### ###### ##     ##  #####  #     #      ########    ##    #  #  #####
 #   # #   #  ###   #   #  #####  ###    ##     ##   ##  #  ##    #    #     #     #   ##   #  #####  ###   ###
 ###  #   #  ##### ####   #   #   #   ######   ##   #########  #####  ##### ##### #   ##   #  #   #  #   # #####
 -
 File:
 PackedCircle.js
 Created By:
 Mario Gonzalez
 Project    :
 None
 Abstract:
 Manages a set of packed circles.
 Basic Usage:
 http://onedayitwillmake.com/CirclePackJS/
 */
var Point = require('../../model/Point');
var Constants = require('../../model/Constants');

class CircleManager {

    /**
     * @constructor
     */
    constructor() {
        this.allCircles = [];						// An array containing all the circles in this CircleManager
        this.numberOfCollisionPasses = 1;						// Number of times to run the collision check, higher is more accurate with less overlapping but slower
        this.numberOfTargetingPasses = 0;						// Number of times to move a circle towards its target
        this.bounds = {};						// Object containing x,y,width,height
        this.collisionCallback = null;					// An object containing a scope and a function block
        this.allCircles = [];
        return this;
    }


    /**
     * Adds a circle to the simulation
     * @param aCircle
     */
    addCircle(aCircle) {
        aCircle.id = this.allCircles.length;
        this.allCircles.push(aCircle);
        return this;
    }

    /**
     * Removes a circle from the simulations
     * @param aCircle    Circle to remove
     */
    removeCircle(aCircle) {
        var index = 0,
            found = false,
            len = this.allCircles.length;

        if (len === 0) {
            throw "Error: (CircleManager) attempting to remove circle, and allCircles.length === 0!!"
        }

        while (len--) {
            if (this.allCircles[len] === aCircle) {
                found = true;
                index = len;
                break;
            }
        }

        if (!found) {
            throw "Could not locate circle in allCircles array!"
        }

        // Remove
        this.allCircles[index].dealloc();
        this.allCircles[index] = null;

        return this;
    }

    /**
     * Forces all circles to move to where their delegate position is
     * Assumes all targets have a 'position' property!
     */
    forceCirclesToMatchDelegatePositions() {
        var len = this.allCircles.length;

        // push toward target position
        for (var n = 0; n < len; n++) {
            var aCircle = this.allCircles[n];
            if (!aCircle || !aCircle.delegate) {
                continue;
            }

            aCircle.position.setPos(aCircle.delegate.x + aCircle.offset.x, aCircle.delegate.y + aCircle.offset.y);
        }
    }


    pushAllCirclesTowardTarget(aTarget) {
        var v = new Point(),
            circleList = this.allCircles,
            len = circleList.length;

        v.setPos(0, 0);

        // push toward target position
        for (var n = 0; n < this.numberOfTargetingPasses; n++) {
            for (var i = 0; i < len; i++) {
                var c = circleList[i];

                if (c.isFixed) continue;

                v.x = c.position.x - (c.targetPosition.x + c.offset.x);
                v.y = c.position.y - (c.targetPosition.y + c.offset.y);
                v.multiply(c.targetChaseSpeed);

                c.position.x -= v.x;
                c.position.y -= v.y;
            }
        }
    }

    /**
     * Packs the circles towards the center of the bounds.
     * Each circle will have it's own 'targetPosition' later on
     */
    handleCollisions() {
        this.removeExpiredElements();

        var v = new Point(),
            circleList = this.allCircles,
            len = circleList.length;

        v.setPos(0, 0);

        // Collide circles
        for (var n = 0; n < this.numberOfCollisionPasses; n++) {
            for (var i = 0; i < len; i++) {
                var ci = circleList[i];


                for (var j = i + 1; j < len; j++) {
                    var cj = circleList[j];

                    // Circle collision should be ignored (ci == cj, or collisionGroups are incorrect
                    if (!this.circlesCanCollide(ci, cj)) {
                        continue;   // It's us!
                    }

                    var dx = cj.position.x - ci.position.x,
                        dy = cj.position.y - ci.position.y;

                    // The distance between the two circles radii, but we're also gonna pad it a tiny bit
                    var r = (ci.radius + cj.radius),
                        d = ci.position.getDistanceSquared(cj.position);

                    /**
                     * Collision detected!
                     */
                    if (d < (r * r) - 0.02) {
                        v.x = dx;
                        v.y = dy;
                        v.normalize();

                        var inverseForce = (r - Math.sqrt(d)) * 0.5;
                        v.multiply(inverseForce);

                        // Move cj opposite of the collision as long as its not fixed
                        if (!cj.isFixed) {
                            if (ci.isFixed)
                                v.multiply(2.0);	// Double inverse force to make up for the fact that the other object is fixed

                            // ADD the velocity
                            cj.position.translatePoint(v);
                        }

                        // Move ci opposite of the collision as long as its not fixed
                        if (!ci.isFixed) {
                            if (cj.isFixed)
                                v.multiply(2.0);	// Double inverse force to make up for the fact that the other object is fixed

                            // SUBTRACT the velocity
                            ci.position.subtract(v);
                        }

                        // Emit the collision event from each circle, with itself as the first parameter
                        if (this.collisionCallback && n === 0) {
                            this.collisionCallback.block.call(this.collisionCallback.scope, ci, cj, v);
                        }
                    }
                }
            }
        }
    }

    /**
     * Performs boundary check against a circle.
     * Valid options are:
     * RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_WRAP_X
     * RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_WRAP_Y
     * RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_CONSTRAIN_X
     * RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_CONSTRAIN_Y
     *
     * These can be combined in the form of:
     * RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_WRAP_X | RealtimeMultiplayerGame.modules.circlecollision.CircleManager.prototype.BOUNDARY_CONSTRAIN_Y
     * @param {RealtimeMultiplayerGame.modules.circlecollision.PackedCircle}    aCircle Circle to perform boundary check against
     * @param {Number} boundsRule    A bitmask representing the boundary rules
     */
    handleBoundaryForCircle(aCircle, boundsRule) {
        if (boundsRule === undefined) {
            throw "No Boundary rule defined!";
        }
        if (!aCircle.position) {
            //TODO WTF MAN?
            console.log(aCircle.entityid + " " + aCircle.entityType + " can't bounds check");
            return;
        }
        var xpos = aCircle.position.x;
        var ypos = aCircle.position.y;

        var radius = aCircle.radius;
        var diameter = radius * 2;

        // Toggle these on and off,
        // Wrap and bounce, are opposite behaviors so pick one or the other for each axis, or bad things will happen.
        var wrapXMask = Constants.BOUNDARY_WRAP_X;
        var wrapYMask = Constants.BOUNDARY_WRAP_Y;
        var constrainXMask = Constants.BOUNDARY_CONSTRAIN_X;
        var constrainYMask = Constants.BOUNDARY_CONSTRAIN_Y;

        // Convert to bitmask - Uncomment the one you want, or concact your own :)
//			boundsRule = wrapXMask | wrapYMask;  // Wrap Y axis, but constrain horizontally


        // Wrap X
        if (boundsRule & wrapXMask && xpos - diameter > this.bounds.width) {
            aCircle.position.x = this.bounds.x - radius;
        } else if (boundsRule & wrapXMask && xpos + diameter < this.bounds.x) {
            aCircle.position.x = this.bounds.width - radius;
        }
        // Wrap Y
        if (boundsRule & wrapYMask && ypos - diameter > this.bounds.height) {
            aCircle.position.y = this.bounds.y - radius;
        } else if (boundsRule & wrapYMask && ypos + diameter < this.bounds.y) {
            aCircle.position.y = this.bounds.height + radius;
        }

        // Constrain X
        if (boundsRule & constrainXMask && xpos + radius >= this.bounds.width) {
            aCircle.position.x = aCircle.position.x = this.bounds.width - radius;
        } else if (boundsRule & constrainXMask && xpos - radius < this.bounds.x) {
            aCircle.position.x = this.bounds.x + radius;
        }

        // Constrain Y
        if (boundsRule & constrainYMask && ypos + radius > this.bounds.height) {
            aCircle.position.y = this.bounds.height - radius;
        } else if (boundsRule & constrainYMask && ypos - radius < this.bounds.y) {
            aCircle.position.y = this.bounds.y + radius;
        }
    }

    /**
     * Performs handleBoundaryForCircle on all circles
     * @param {Number} boundsRule    A bitmask representing the boundary rules
     */
    handleBoundaryForAllCircles(boundsRule) {
        if (boundsRule === undefined) {
            throw "handleBoundaryForAllCircles - No Bounds Rule defined!";
        }
        var len = this.allCircles.length;
        for (var i = 0; i < len; i++)
            this.handleBoundaryForCircle(this.allCircles[i], boundsRule)
    }


    /**
     * Checks if two Circles can collide with one another.
     * For example, given the following three objects
     *
     * someCircleA.collisionMask = 1;
     * someCircleA.collisionGroup = 2;
     *
     * someCircleB.collisionMask = 2;
     * someCircleB.collisionGroup = 1;
     *
     * someCircleC.collisionMask = 2;
     * someCircleC.collisionGroup = 1;
     *
     * A and B will collide, B and C will not collide because B and C only want to collide with group 2
     *
     * @param {RealtimeMultiplayerGame.modules.circlecollision.PackedCircle}    circleA
     * @param {RealtimeMultiplayerGame.modules.circlecollision.PackedCircle}    circleB
     */
    circlesCanCollide(circleA, circleB) {
        if (!circleA || !circleB || circleA === circleB) return false; 					// one is null (will be deleted next loop), or both point to same obj.
        if (circleA.delegate == null || circleB.delegate == null) return false;			// This circle will be removed next loop, it's entity is already removed

//			both are fixed
        if (circleA.isFixed & circleB.isFixed) return false;

//			They dont want to collide
        if ((circleA.collisionGroup & circleB.collisionMask) == 0) return false;
        if ((circleB.collisionGroup & circleA.collisionMask) == 0) return false;

        return true;
    }

    ///// ACCESSORS
    getAllCircles() {
        return this.allCircles
    }

    setBounds(x, y, w, h) {
        this.bounds.x = x;
        this.bounds.y = y;
        this.bounds.width = w;
        this.bounds.height = h;
    }

    setNumberOfCollisionPasses(value) {
        this.numberOfCollisionPasses = value;
        return this;
    }

    setNumberOfTargetingPasses(value) {
        this.numberOfTargetingPasses = value;
        return this;
    }

    setCallback(block, scope) {
        this.collisionCallback = {'block': block, 'scope': scope};
    }

    ///// MEMORY MANAGEMENT
    removeExpiredElements() {
        // remove null elements
        for (var k = this.allCircles.length; k >= 0; k--) {
            if (this.allCircles[k] === null)
                this.allCircles.splice(k, 1);
        }
    }
}

module.exports = CircleManager;