
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_4.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_4(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _posterBG = this.game.add.sprite(0, 0, 'posterBG', null, this);
	_posterBG.alpha = 0.0;
	
	var _boy2_png = this.game.add.sprite(1, 819, 'ip', 'bird.png', this);
	_boy2_png.scale.setTo(0.9, 0.9);
	
	var _btn_a = this.game.add.button(95, 380, 'sceneBtn', this.clickBtn, this, null, 's4_a.png', null, null, this);
	_btn_a.data = {
	"value":"a"
	};
	
	var _btn_b = this.game.add.button(95, 493, 'sceneBtn', this.clickBtn, this, null, 's4_b.png', null, null, this);
	_btn_b.data = {
	"value":"b"
	};
	
	var _btn_c = this.game.add.button(95, 606, 'sceneBtn', this.clickBtn, this, null, 's4_c.png', null, null, this);
	_btn_c.data = {
	"value":"c"
	};
	
	var _btn_d = this.game.add.button(95, 720, 'sceneBtn', this.clickBtn, this, null, 's4_d.png', null, null, this);
	_btn_d.data = {
	"value":"d"
	};
	
	this.game.add.sprite(110, 156, 'sceneTitle', 's_bg.png', this);
	
	this.game.add.sprite(124, 173, 'sceneTitle', 's4_1.png', this);
	
	this.game.add.sprite(125, 214, 'sceneTitle', 's4_2.png', this);
	
	
	
	// public fields
	
	this.fBtn_a = _btn_a;
	this.fBtn_b = _btn_b;
	this.fBtn_c = _btn_c;
	this.fBtn_d = _btn_d;
	
}

/** @type Phaser.Group */
var prefab_4_proto = Object.create(Phaser.Group.prototype);
prefab_4.prototype = prefab_4_proto;
prefab_4.prototype.constructor = prefab_4;

/* --- end generated code --- */
// -- user code here --
prefab_4.prototype.initOnce = function () {

};

prefab_4.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);
	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup5);
	// gGame.gameScene.disAppearGroup(this);
	// gGame.gameScene.appearGroup(gGame.gameScene.fGroup5);
};

prefab_4.prototype.setBackground = function () {

};