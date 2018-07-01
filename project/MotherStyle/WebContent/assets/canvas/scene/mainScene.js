
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * mainScene.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function mainScene(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(0, 0, 'posterBG', null, this);
	
	var _group1 = new prefab_1(this.game, this);
	_group1.position.setTo(751, 0);
	
	var _group2 = new prefab_2(this.game, this);
	_group2.position.setTo(1429, 2);
	
	var _group3 = new prefab_3(this.game, this);
	_group3.position.setTo(751, 0);
	
	var _group4 = new prefab_4(this.game, this);
	_group4.position.setTo(751, 0);
	
	var _group5 = new prefab_5(this.game, this);
	_group5.position.setTo(751, 0);
	
	var _group6 = new prefab_6(this.game, this);
	_group6.position.setTo(751, 0);
	
	var _group7 = new prefab_7(this.game, this);
	_group7.position.setTo(751, 0);
	
	var _group8 = new prefab_8(this.game, this);
	_group8.position.setTo(751, 0);
	
	var _groupOver = new overPrefab(this.game, this);
	_groupOver.position.setTo(751, 0);
	
	var _music_btn = this.game.add.button(859, -23, 'music_btn', this.clickMusic, this, null, null, null, null, this);
	
	var _groupSetName = new pre_1(this.game, this);
	_groupSetName.position.setTo(-871, -13);
	
	var _bgBtn = this.game.add.button(0, 0, 'bg', null, this, null, null, null, null, this);
	_bgBtn.alpha = 0.0;
	
	var _group0 = new prefab_0(this.game, this);
	
	var _red = this.game.add.sprite(0, 0, 'red', null, this);
	_red.scale.setTo(0.565, 1.275);
	_red.alpha = 0.0;
	
	
	
	// public fields
	
	this.fGroup1 = _group1;
	this.fGroup2 = _group2;
	this.fGroup3 = _group3;
	this.fGroup4 = _group4;
	this.fGroup5 = _group5;
	this.fGroup6 = _group6;
	this.fGroup7 = _group7;
	this.fGroup8 = _group8;
	this.fGroupOver = _groupOver;
	this.fMusic_btn = _music_btn;
	this.fGroupSetName = _groupSetName;
	this.fBgBtn = _bgBtn;
	this.fGroup0 = _group0;
	
}

/** @type Phaser.Group */
var mainScene_proto = Object.create(Phaser.Group.prototype);
mainScene.prototype = mainScene_proto;
mainScene.prototype.constructor = mainScene;

/* --- end generated code --- */
// -- user code here --

mainScene.prototype.appreaDom = function () {
	//获取屏幕可见宽高
	// var screenWidth =  window.screen.availWidth;
	// var screenHeight = window.screen.availHeight ;
	// var screenWidth =  this.game.scale.bounds.width;
	// var screenHeight = this.game.scale.bounds.height;
	var screenWidth =  this.game.scale.dom.visualBounds.width;
	var screenHeight = this.game.scale.dom.visualBounds.height ;

	var img = $('#id_dom_1')[0];
	img.src = 'assets/image/temp/dom01.png';

	var dpr = window.devicePixelRatio;

	if(dpr == 3){
		dpr =  1.75;		//设置为1.75 最完美
	}else{
		dpr *= 1.1;
	}

	var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/dpr);
	var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/dpr);
	img.style.width = tsWidth + 'px';
	img.style.width = tsHeight + 'px';
	img.style.opacity = 1;

	gUserInfo.tsHeight = tsHeight;



	// var gameWidth =  this.game.scale.bounds.width;
	// var gameHeight = this.game.scale.bounds.height;
	// var spanHeight = (screenHeight - gameHeight)/2;
	//
	// alert('screenWidth:' + screenWidth + "\n" +
	// 	"screenHeight:" + screenHeight + "\n" +
	// 	'dpr:' + window.devicePixelRatio+ "\n" +
	// 	'gameWidth:' + gameWidth+ "\n" +
	// 	'gameHeight:' + gameHeight+ "\n" +
	// 	'spanHeight:' + gameHeight+ "\n" +
	// 	'tsWidth:' + tsWidth + "\n" +
	// 	'tsHeight:' + tsHeight);

	var img = $('#id_dom_2')[0];
	img.src = 'assets/image/temp/dom02.png';
	var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/dpr);
	var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/dpr);
	img.style.width = tsWidth + 'px';
	img.style.width = tsHeight + 'px';
	img.style.float = 'right';
	img.style.marginRight = '-10px';
	img.style.opacity = 1;

	var img = $('#id_dom_3')[0];
	img.src = 'assets/image/temp/dom03.png';
	var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/dpr);
	var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/dpr);
	img.style.width = tsWidth + 'px';
	img.style.width = tsHeight + 'px';
	img.style.marginLeft = screenWidth - tsWidth + 'px';
	img.style.marginTop = screenHeight - tsHeight*2 + 'px';
	img.style.opacity = 1;

	// var img = $('#id_dom_4')[0];
	// img.src = 'assets/image/temp/dom04.png';
	// var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/window.devicePixelRatio);
	// var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/window.devicePixelRatio);
	// img.style.width = tsWidth + 'px';
	// img.style.width = tsHeight + 'px';
	// img.style.float = 'left';
	// img.style.marginTop = screenHeight/3+ 'px';
	// img.style.marginLeft = '-10px';
	// img.style.opacity = 1;
	//
	// var img = $('#id_dom_5')[0];
	// img.src = 'assets/image/temp/dom05.png';
	// var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/window.devicePixelRatio);
	// var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/window.devicePixelRatio);
	// img.style.width = tsWidth + 'px';
	// img.style.width = tsHeight + 'px';
	// img.style.float = 'left';
	// img.style.marginTop = screenHeight*3/5+ 'px';
	// img.style.marginLeft = -tsWidth + 'px';
	//img.style.opacity = 1;

	var img = $('#id_dom_6')[0];
	img.src = 'assets/image/temp/dom06.png';
	var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/dpr);
	var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/dpr);
	img.style.width = tsWidth*2 + 'px';
	img.style.width = tsHeight*2 + 'px';
	img.style.marginLeft = screenWidth/2 - tsWidth + 'px';
	img.style.marginTop = tsHeight/4 + 'px';
	img.style.opacity = 1;
};

mainScene.prototype.disappearDom = function () {
	var img = $('#id_dom_1')[0];
	img.style.width = '0px';
	img.style.opacity = 0;
	img.src = gUserInfo.toumingName;

	var img = $('#id_dom_2')[0];
	img.style.width = '0px';
	img.style.opacity = 0;
	img.src = gUserInfo.toumingName;

	var img = $('#id_dom_3')[0];
	img.style.width = '0px';
	img.style.opacity = 0;
	img.src = gUserInfo.toumingName;

	var img = $('#id_dom_4')[0];
	img.style.width = '0px';
	img.style.opacity = 0;
	img.src = gUserInfo.toumingName;

	var img = $('#id_dom_5')[0];
	img.style.width = '0px';
	img.style.opacity = 0;
	img.src = gUserInfo.toumingName;

	var img = $('#id_dom_6')[0];
	img.style.width = '0px';
	img.style.opacity = 0;
	img.src = gUserInfo.toumingName;
};

mainScene.prototype.appearGroup = function (group1, group2) {
	this.fBgBtn.inputEnabled = true;

	//3 f7973a
	//4 fde500
	//5 bad53f
	//6 4dbb84
	//7 00ae94
	//8 995ba3
	//9 ee465d

	this.game.add.tween(group1).to( { x:-gGameConf.width, y:0}, 1500,
		Phaser.Easing.Exponential.InOut, true);

	var tween = this.game.add.tween(group2).to( { x:0, y:0}, 1500,
		Phaser.Easing.Exponential.InOut, true);

	tween.onComplete.addOnce(function () {
		gGame.gameScene.fBgBtn.inputEnabled = false;
	})
};

mainScene.prototype.appearGroup2 = function (bObj, eObj) {
	this.fBgBtn.inputEnabled = true;

	bObj.x = -gGameConf.width;

	var group = eObj;
	group.x = 0;
	//group.setBackground();

	for(var i = 0; i < group.length; i++){
		this.setTempAction1(group.getChildAt(i));
	}

};

mainScene.prototype.disAppearGroup = function (group) {
	var tween = this.game.add.tween(group).to( { x:-gGameConf.width - 1, y:0}, 500,
		Phaser.Easing.Exponential.InOut, true);
};

mainScene.prototype.initOnce = function () {
	this.setAnchorMiddle(this.fMusic_btn);
	this.fBgBtn.inputEnabled = false;

	//this.fGroupOver.convertImageAppear();

	//this.fGroupSetName.convertImageAppear();

	// var img = $('#id_leftUp')[0];
	// img.src = 'assets/image/temp/1.png';
	// var tsWidth = Math.round(img.clientWidth/ this.game.scale.scaleFactor.x/window.devicePixelRatio);
	// var tsHeight = Math.round(img.clientHeight / this.game.scale.scaleFactor.y/window.devicePixelRatio);
	// img.style.width = tsWidth + 'px';
	// img.style.width = tsHeight + 'px';
	//
	//
	// var img = $('#id_rightUp')[0];
	// img.src = 'assets/image/temp/3.png';
	// var tsWidth = Math.round(img.clientWidth/ this.game.scale.scaleFactor.x/window.devicePixelRatio);
	// var tsHeight = Math.round(img.clientHeight / this.game.scale.scaleFactor.y/window.devicePixelRatio);
	// img.style.width = tsWidth + 'px';
	// img.style.width = tsHeight + 'px';
	// img.style.float = 'right';
	//
	// var img = $('#id_rightDown')[0];
	// img.src = 'assets/image/temp/2.png';
	// var tsWidth = Math.round(img.clientWidth/ this.game.scale.scaleFactor.x/window.devicePixelRatio);
	// var tsHeight = Math.round(img.clientHeight / this.game.scale.scaleFactor.y/window.devicePixelRatio);
	// img.style.width = tsWidth + 'px';
	// img.style.width = tsHeight + 'px';
	// img.style.float = 'right';
	//
	//
	// var idGame = $('#id_game')[0];
	// var screenWidth =  document.body.clientWidth;
	// var screenHeight = document.body.scrollHeight ;
	//
	// img.style.marginLeft = (screenWidth - tsWidth) + 'px';
	// img.style.marginTop = (screenHeight - tsHeight*2) + 'px';
	// // img.style.float = 'right';
	// //
	// console.log(img.style);
	// console.log(screenHeight);
	// console.log(this.game.scale.bounds);

	// // img.style.margin = '10px 0px 0px 200px';
	//  img.style.margin = '0px 0px 0px 0px';


	//img.style.left = '100px';
	//
	//
	//
	// // this.f111.anchor.set(0,0);
	// // this.f111.x = -this.game.scale.bounds.x;
	// // this.f111.y = 0;
	//
	// console.log(img.style);
	// console.log(img);
	//
	// console.log(this.game.scale.scaleFactor.x);
	// console.log(this.game.scale.scaleFactor.y);
	// console.log(this.game.scale.bounds);

	// this.game.input.onDown.add(this.onGameDown, "down");
	// this.game.input.onUp.add(this.onGameUp, "up");
	// this.game.input.addMoveCallback(this.onGameMove, "move");
	//移除事件
	// this.game.input.onDown.remove(this.onDown, "down");
	// this.game.input.onUp.remove(this.onUp, "up");
	// this.game.input.deleteMoveCallback(this.onMoveCallBack, "move");
};

mainScene.prototype.update = function () {
	this.fMusic_btn.angle += 2;
};

mainScene.prototype.clickMusic = function () {
	this.game.state.states.Video.on_off_Music();
	this.game.state.states.Video.on_off_Sound();
	//this.game.state.states.Video.playClick();
};

mainScene.prototype.checkClickTime = function () {
	if(Date.now() - gUserInfo.clickTime > 1000){
		gUserInfo.clickTime = Date.now();
		return true;
	}

	return false;
};

mainScene.prototype.setAnchorMiddle = function (spr) {
	spr.anchor.set(0.5,0.5);
	spr.x += spr.width/2;
	spr.y += spr.height/2;
};

mainScene.prototype.setGroupTween = function (obj, width, time1, time2) {
	width = width || 50;
	time1 = 500 || 500;
	time2 = 1500 || 1500;

	var begainX = obj.x + width;
	var endX = obj.x;

	var tweenA = this.game.add.tween(obj).to({x:begainX}, time1, Phaser.Easing.Linear.None);
	var tweenB = this.game.add.tween(obj).to({x:endX}, time2, Phaser.Easing.Bounce.Out);
	tweenA.chain(tweenB);
	tweenA.start();
};

mainScene.prototype.setTempAction1 = function (group) {
	group.x += gGameConf.width;

	var time = Math.random()*200;
	var tweenA = this.game.add.tween(group).to({x:group.x - 300}, 100, Phaser.Easing.Linear.None, true);
	tweenA.onComplete.addOnce(function () {
		var tweenB = gGame.add.tween(group).to({x:group.x - 340}, 1600 + time, Phaser.Easing.Elastic.Out, true);
		tweenB.onComplete.addOnce(function () {
			gGame.gameScene.fBgBtn.inputEnabled = false;
		})
	});
};

