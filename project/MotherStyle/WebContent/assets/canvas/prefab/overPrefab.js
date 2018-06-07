
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * overPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function overPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _groupFoxi = this.game.add.group(this);
	
	var _Result_foxi = this.game.add.sprite(0, 0, 'Result_foxi', null, _groupFoxi);
	_Result_foxi.scale.setTo(0.0, 1.0);
	
	var _groupShaonv = this.game.add.group(this);
	_groupShaonv.scale.setTo(0.0, 1.0);
	
	this.game.add.sprite(0, 0, 'Result_shaonv', null, _groupShaonv);
	
	var _groupHU = this.game.add.group(this);
	_groupHU.scale.setTo(0.0, 1.0);
	
	this.game.add.sprite(-1, 1, 'Result_huxi', null, _groupHU);
	
	var _groupHuan = this.game.add.group(this);
	_groupHuan.scale.setTo(0.0, 1.0);
	
	this.game.add.sprite(0, 0, 'Result_naodong', null, _groupHuan);
	
	var _again_png = this.game.add.button(36, 775, 'common1', this.clickAgain, this, null, 'again.png', null, null, this);
	_again_png.alpha = 0.0;
	
	var _goStudy = this.game.add.button(342, 772, 'common1', this.clickStudy, this, null, 'go.png', null, null, this);
	
	var _get = this.game.add.sprite(753, 795, 'common1', 'get.png', this);
	_get.scale.setTo(-0.5, 0.5);
	
	
	
	// public fields
	
	this.fGroupFoxi = _groupFoxi;
	this.fGroupShaonv = _groupShaonv;
	this.fGroupHU = _groupHU;
	this.fGroupHuan = _groupHuan;
	this.fGoStudy = _goStudy;
	this.fGet = _get;
	
}

/** @type Phaser.Group */
var overPrefab_proto = Object.create(Phaser.Group.prototype);
overPrefab.prototype = overPrefab_proto;
overPrefab.prototype.constructor = overPrefab;

/* --- end generated code --- */
// -- user code here --

overPrefab.prototype.initOnce = function () {
	var score = 0;

	var ballArr = [
		{"a":1, "b":2, "c":3, "d":4},
		{"a":4, "b":1, "c":3, "d":2},
		{"a":3, "b":1, "c":2, "d":4},
		{"a":4, "b":2, "c":1, "d":3},

		{"a":1, "b":2, "c":3, "d":4},
		{"a":2, "b":3, "c":1, "d":4},
		{"a":2, "b":1, "c":4, "d":3},
		{"a":3, "b":4, "c":2, "d":1}
	];

	for(var i = 0; i < gUserInfo.choice.length; i++){
		score += ballArr[i][gUserInfo.choice[i]];
	}

	if(score <= 8){
		this.fGroupFoxi.scale.x = 1;
	}else if(score <= 16){
		this.fGroupShaonv.scale.x = 1;
	}else if(score <= 24){
		this.fGroupHU.scale.x = 1;
	}else {
		this.fGroupHuan.scale.x = 1;
	}


	gGame.gameScene.setAnchorMiddle(this.fGoStudy);
	var tween = this.game.add.tween(this.fGoStudy.scale).to({x:1.2, y:1.2}, 1000, Phaser.Easing.Linear.None,
		true, 0, -1);
	tween.yoyo(true);

	gGame.gameScene.setAnchorMiddle(this.fGet);
	var tween = this.game.add.tween(this.fGet).to({alpha:0.5}, 500, Phaser.Easing.Linear.None,
		true, 0, -1);
	tween.yoyo(true);

	var tween = this.game.add.tween(this.fGet).to({x:this.fGet.x + 10}, 500, Phaser.Easing.Linear.None,
		true, 0, -1);
	tween.yoyo(true);
};

overPrefab.prototype.clickBtn = function (btn) {

};

overPrefab.prototype.clickStudy = function (btn) {
	gGame.gameScene.fGroupSetName.appearPopLayer();
};

overPrefab.prototype.clickAgain = function (btn) {
	gGame.gameScene.fGroupAD.x = gGameConf.width + 1;
	gGame.gameScene.appearGroup(this, gGame.gameScene.fGroupAD);
};


overPrefab.prototype.setBackground = function () {
	//document.body.style.background="#ffbc49";
};