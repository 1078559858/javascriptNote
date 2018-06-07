
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_2.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_2(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _posterBG = this.game.add.sprite(0, 0, 'posterBG', null, this);
	_posterBG.alpha = 0.0;
	
	var _boy2_png = this.game.add.sprite(1, 747, 'ip', 'boy2.png', this);
	_boy2_png.scale.setTo(1.3, 1.3);
	
	this.game.add.sprite(110, 156, 'sceneTitle', 's2_title.png', this);
	
	var _btn_a = this.game.add.button(111, 419, 'sceneProblem', this.clickBtn, this, null, 's2_a.png', null, null, this);
	_btn_a.data = {
	"value":"a"
	};
	
	var _btn_b = this.game.add.button(340, 419, 'sceneProblem', this.clickBtn, this, null, 's2_b.png', null, null, this);
	_btn_b.data = {
	"value":"b"
	};
	
	var _btn_c = this.game.add.button(111, 603, 'sceneProblem', this.clickBtn, this, null, 's2_c.png', null, null, this);
	_btn_c.data = {
	"value":"c"
	};
	
	var _btn_d = this.game.add.button(340, 603, 'sceneProblem', this.clickBtn, this, null, 's2_d.png', null, null, this);
	_btn_d.data = {
	"value":"d"
	};
	
	
	
	// public fields
	
	this.fBtn_a = _btn_a;
	this.fBtn_b = _btn_b;
	this.fBtn_c = _btn_c;
	this.fBtn_d = _btn_d;
	
}

/** @type Phaser.Group */
var prefab_2_proto = Object.create(Phaser.Group.prototype);
prefab_2.prototype = prefab_2_proto;
prefab_2.prototype.constructor = prefab_2;

/* --- end generated code --- */
// -- user code here --


prefab_2.prototype.initOnce = function () {

};

prefab_2.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);

	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup3);
	// gGame.gameScene.disAppearGroup(this);
	// gGame.gameScene.appearGroup(gGame.gameScene.fGroup3);
};

prefab_2.prototype.setBackground = function () {

};