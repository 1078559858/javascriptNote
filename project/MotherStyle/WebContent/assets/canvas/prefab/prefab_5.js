
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_5.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_5(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(106, 50, 'common1', 'heiban.png', this);
	
	var _temp = this.game.add.sprite(0, 0, 'temp3', null, this);
	_temp.scale.setTo(0.3, 0.3);
	
	var _bird_png = this.game.add.sprite(255, 15, 'ip', 'xiong.png', this);
	_bird_png.scale.setTo(0.5, 0.5);
	
	this.game.add.text(128, 212, '5、哪个是孩子开学后，\n     你的真实状态?', {"font":"bold 40px Arial","fill":"#ffffff"}, this);
	
	var _Q2_answerA = this.game.add.button(26, 452, 'Q2_answerA', this.clickBtn, this, null, null, null, null, this);
	_Q2_answerA.data = {
	"value":"a"
	};
	
	var _Q2_answerB = this.game.add.button(283, 292, 'Q2_answerB', this.clickBtn, this, null, null, null, null, this);
	_Q2_answerB.data = {
	"value":"b"
	};
	
	var _Q2_answerC = this.game.add.button(20, 780, 'Q2_answerC', this.clickBtn, this, null, null, null, null, this);
	_Q2_answerC.data = {
	"value":"c"
	};
	
	var _Q2_answerD = this.game.add.button(374, 794, 'Q2_answerD', this.clickBtn, this, null, null, null, null, this);
	_Q2_answerD.data = {
	"value":"d"
	};
	
	
	
}

/** @type Phaser.Group */
var prefab_5_proto = Object.create(Phaser.Group.prototype);
prefab_5.prototype = prefab_5_proto;
prefab_5.prototype.constructor = prefab_5;

/* --- end generated code --- */
// -- user code here --
prefab_5.prototype.initOnce = function () {

};

prefab_5.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);
	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup6);
	// gGame.gameScene.disAppearGroup(this);
	// gGame.gameScene.appearGroup(gGame.gameScene.fGroup6);
};

prefab_5.prototype.setBackground = function () {
	gGame.gameScene.setColorChange( 'bad53f');
};