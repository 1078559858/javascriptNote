
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * prefab_6.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function prefab_6(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(94, 35, 'common1', 'heiban.png', this);
	
	var _temp = this.game.add.sprite(0, 0, 'temp3', null, this);
	_temp.scale.setTo(0.3, 0.3);
	
	var _bird_png = this.game.add.sprite(243, 0, 'ip', 'eyu.png', this);
	_bird_png.scale.setTo(0.5, 0.5);
	
	this.game.add.text(143, 189, '6、孩子问：“妈妈，\n     我们家有钱吗?”\n     你的回答是： ', {"font":"bold 40px Arial","fill":"#ffffff"}, this);
	
	var _group1 = this.game.add.group(this);
	_group1.position.setTo(-2, -3);
	
	var _chat = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group1);
	_chat.data = {
	"value":"a"
	};
	
	this.game.add.text(124, 489, 'A:扔给孩子一本辅导习题集，然\n    后告诉他“书中自有黄金屋”', {"font":"bold 30px Arial"}, _group1);
	
	var _group2 = this.game.add.group(this);
	_group2.position.setTo(-4, 175);
	
	var _chat1 = this.game.add.button(48, 472, 'chat3', this.clickBtn, this, null, null, null, null, _group2);
	_chat1.data = {
	"value":"b"
	};
	
	this.game.add.text(134, 490, 'B:这是你祖母留下来的青铜器，\n    你收好，将来价值连城。', {"font":"bold 30px Arial"}, _group2);
	
	var _group3 = this.game.add.group(this);
	_group3.position.setTo(-2, 374);
	
	var _chat2 = this.game.add.button(52, 460, 'chat1', this.clickBtn, this, null, null, null, null, _group3);
	_chat2.data = {
	"value":"c"
	};
	
	this.game.add.text(131, 506, 'C：我有钱，但你没有。', {"font":"bold 30px Arial"}, _group3);
	
	var _group4 = this.game.add.group(this);
	_group4.position.setTo(-4, 552);
	
	var _chat3 = this.game.add.button(52, 460, 'chat3', this.clickBtn, this, null, null, null, null, _group4);
	_chat3.data = {
	"value":"d"
	};
	
	this.game.add.text(139, 472, 'D：我们家有很多钱，以后这些\n     钱都是你的。', {"font":"bold 30px Arial"}, _group4);
	
	
	
}

/** @type Phaser.Group */
var prefab_6_proto = Object.create(Phaser.Group.prototype);
prefab_6.prototype = prefab_6_proto;
prefab_6.prototype.constructor = prefab_6;

/* --- end generated code --- */
// -- user code here --
prefab_6.prototype.initOnce = function () {

};

prefab_6.prototype.clickBtn = function (btn) {
	this.game.state.states.Video.playClick();

	gUserInfo.choice.push(btn.data.value);
	gGame.gameScene.appearGroup2(this, gGame.gameScene.fGroup7);
	// gGame.gameScene.disAppearGroup(this);
	// gGame.gameScene.appearGroup(gGame.gameScene.fGroup7);
};

prefab_6.prototype.setBackground = function () {
	gGame.gameScene.setColorChange( '4dbb84');
};