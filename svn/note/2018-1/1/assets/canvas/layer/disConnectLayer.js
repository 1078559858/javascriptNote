
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * disConnectLayer.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function disConnectLayer(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _bgpop = this.game.add.button(-106, -37, 'bgpop', null, this, null, null, null, null, this);
	_bgpop.scale.setTo(15.0, 55.0);
	
	this.game.add.sprite(54, 465, 'pop', 'bg.png', this);
	
	this.game.add.text(288, 485, '断开连接', {"font":"bold 48px Arial"}, this);
	
	var _textError = this.game.add.text(122, 621, '由于您长时间没有操作，已断开链接！', {"font":"bold 32px Arial","fill":"#ffffff"}, this);
	
	this.game.add.button(260, 703, 'pop', this.clickConnectAgain, this, null, 'relink.png', null, null, this);
	
	
	
	// public fields
	
	this.fTextError = _textError;
	/* --- post-init-begin --- */
	// you can insert code here

	//create Text

	this.scale.x = 0;
	/* --- post-init-end --- */
	
	
}

/** @type Phaser.Group */
var disConnectLayer_proto = Object.create(Phaser.Group.prototype);
disConnectLayer.prototype = disConnectLayer_proto;
disConnectLayer.prototype.constructor = disConnectLayer;

/* --- end generated code --- */
// -- user code here --


disConnectLayer.prototype.appearDisconnect = function (err) {
	this.scale.x = 1;

	this.setAnchorMiddle(this.fTextError);
	this.fTextError.text = err;
};

disConnectLayer.prototype.setAnchorMiddle = function (spr) {
	spr.anchor.set(0.5,0.5);
	spr.x += spr.width/2;
	spr.y += spr.height/2;
};

disConnectLayer.prototype.clickConnectAgain = function () {
	window.location.reload();
};