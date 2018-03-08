/**
	  ####  #####  ##### ####    ###  #   # ###### ###### ##     ##  #####  #     #      ########    ##    #  #  #####
	 #   # #   #  ###   #   #  #####  ###    ##     ##   ##  #  ##    #    #     #     #   ##   #  #####  ###   ###
	 ###  #   #  ##### ####   #   #   #   ######   ##   #########  #####  ##### ##### #   ##   #  #   #  #   # #####
 -
 File:
 	PackedCircle.js
 Created By:
 	Mario Gonzalez
 Project	:
 	None
 Abstract:
 	 A single packed circle.
	 Contains a reference to it's div, and information pertaining to it state.
 Basic Usage:
	http://onedayitwillmake.com/CirclePackJS/
*/

class Circle {

    /**
     * @constructor
     */
	constructor() {
	
		this.boundsRule = RealtimeMultiplayerGame.modules.circlecollision.PackedCircle.BOUNDS_RULE_IGNORE;
		this.position = new RealtimeMultiplayerGame.model.Point(0,0);
		this.offset = new RealtimeMultiplayerGame.model.Point(0,0);
		this.targetPosition = new RealtimeMultiplayerGame.model.Point(0,0);
		
		this.id = 			0;
		this.delegate =		null;
		this.position =		new RealtimeMultiplayerGame.model.Point(0,0);
		this.offset =			new RealtimeMultiplayerGame.model.Point(0,0);	// Offset from delegates position by this much
	   	this.radius =			0;
		this.radiusSquared =	0;

		this.targetPosition =	null;	// Where it wants to go
		this.targetChaseSpeed = 0.02;

		this.isFixed =		false;
		this.boundsRule =		0;
		this.collisionMask =	0;
		this.collisionGroup =	0;

		this.BOUNDS_RULE_WRAP =		1;      // Wrap to otherside
		this.BOUNDS_RULE_CONSTRAINT =	2;      // Constrain within bounds
		this.BOUNDS_RULE_DESTROY =	4;      // Destroy when it reaches the edge
		this.BOUNDS_RULE_IGNORE =		8;		// Ignore when reaching bounds
		
		return this;
	}


	containsPoint(aPoint)
	{
		var distanceSquared = this.position.getDistanceSquared(aPoint);
		return distanceSquared < this.radiusSquared;
	}

	getDistanceSquaredFromPosition(aPosition)
	{
		var distanceSquared = this.position.getDistanceSquared(aPosition);
		// if it's shorter than either radius, we intersect
		return distanceSquared < this.radiusSquared;
	}

	intersects(aCircle)
	{
		var distanceSquared = this.position.getDistanceSquared(aCircle.position);
		return (distanceSquared < this.radiusSquared || distanceSquared < aCircle.radiusSquared);
	}

/**
* ACCESSORS
*/
	setPosition(aPosition)
	{
		this.position = aPosition;
		return this;
	}

	setDelegate(aDelegate)
	{
		this.delegate = aDelegate;
		return this;
	}

	setOffset(aPosition)
	{
		this.offset = aPosition;
		return this;
	}

	setTargetPosition(aTargetPosition)
	{
		this.targetPosition = aTargetPosition;
		return this;
	}

	setTargetChaseSpeed(aTargetChaseSpeed)
	{
		this.targetChaseSpeed = aTargetChaseSpeed;
		return this;
	}

	setIsFixed(value)
	{
		this.isFixed = value;
		return this;
	}

	setCollisionMask(aCollisionMask)
	{
		this.collisionMask = aCollisionMask;
		return this;
	}

	setCollisionGroup(aCollisionGroup)
	{
		this.collisionGroup = aCollisionGroup;
		return this;
	}

	setRadius(aRadius)
	{
		this.radius = aRadius;
		this.radiusSquared = this.radius*this.radius;
		return this;
	}

	initialize (overrides)
	{
		if (overrides)
		{
			for (var i in overrides)
			{
				this[i] = overrides[i];
			}
		}

		return this;
	}

	dealloc()
	{
		this.position = null;
		this.offset = null;
		this.delegate = null;
		this.targetPosition = null;
	}
}

module.exports = Circle;