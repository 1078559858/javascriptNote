
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * pre_1.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function pre_1(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _Dialog_mc = this.game.add.button(0, 0, 'Dialog_mc', null, this, null, null, null, null, this);
	_Dialog_mc.scale.setTo(1.0, 0.83);
	_Dialog_mc.alpha = 0.0;
	
	var _btn = this.game.add.button(583, 232, 'btn', this.clickClose, this, null, null, null, null, this);
	_btn.alpha = 0.0;
	
	var _pop = this.game.add.sprite(20, 253, 'pop', null, this);
	_pop.alpha = 0.0;
	
	
	
	// public fields
	
	this.fPop = _pop;
	
}

/** @type Phaser.Group */
var pre_1_proto = Object.create(Phaser.Group.prototype);
pre_1.prototype = pre_1_proto;
pre_1.prototype.constructor = pre_1;

/* --- end generated code --- */
// -- user code here --


pre_1.prototype.appearPopLayer = function () {
	this.x = 375;
	this.y = 603;
	this.scale.x = 1;
	this.scale.y = 1;

	//this.game.add.tween(this.scale).to({x:1, y:1}, 1500, Phaser.Easing.Bounce.Out, true);

	this.convertImageAppear();
};

pre_1.prototype.initOnce  = function () {
	this.pivot.x = 375;
	this.pivot.y = 603;

	var img = $('#id_pop_layer_btn_close')[0];
	img.addEventListener('click', function () {
		gGame && gGame.gameScene.fGroupSetName.clickClose();
		//console.log('close');
	});

	// this.fDialog_home_error.visible = false;
	// this.fDialog_home_fourl.visible = false;
	// this.fDialog_home_null.visible = false;
	//
	// this.gChatInput = this.game.make.inputField(240, 880, {
	// 	font: '30px Arial',
	// 	fill: '#000000',
	// 	fontWeight: 'bold',
	// 	width: 150,
	// 	height:43,
	// 	padding: 1,
	// 	borderWidth: 1,
	// 	borderColor: '#ffffff',
	// 	borderRadius: 6,
	// 	fillAlpha:1,
	// 	placeHolder: "  输入姓名",
	// 	textAlign:"center",
	// 	type: PhaserInput.InputType.text
	// });
	//
	// this.addChild(this.gChatInput);
	//
	// var _thisChat = this;
	// this.gChatInput.focusIn.add(function () {
	// 	_thisChat.focusIn();
	// }, this);
	//
	// this.gChatInput.focusOut.add(function () {
	// 	_thisChat.focusOut();
	// }, this);
};

pre_1.prototype.clickClose = function () {
	//this.game.add.tween(this.scale).to({x:0, y:0}, 1000, Phaser.Easing.Bounce.Out, true);

	this.scale.x = 0;
	this.scale.y = 0;

	this.convertImageDisappear();
	gGame.gameScene.fGroupOver.convertImageAppear();

	gGame.gameScene.fGroupOver.fTweenPng.resume();
	gGame.gameScene.fGroupOver.fTweenBtn.resume();

	//gGame.gameScene.appreaDom();
};

pre_1.prototype.convertImageDisappear = function () {
	var img = $('#id_pop_layer_shade')[0];
	img.style.width = 0 + 'px';
	img.style.height = 0 + 'px';

	var img = $('#id_pop_layer_up')[0];
	img.style.width = 0 + 'px';
	img.style.height = 0 + 'px';

	var img = $('#id_pop_layer_down')[0];
	img.style.width = 0 + 'px';
	img.style.height = 0 + 'px';

	var img = $('#id_pop_layer_btn_close')[0];
	img.style.width = 0 + 'px';
	img.style.height = 0 + 'px';
};

pre_1.prototype.convertImageAppear = function () {
	var screenWidth =  this.game.scale.dom.visualBounds.width;
	var screenHeight = this.game.scale.dom.visualBounds.height;
	var gameWidth =  this.game.scale.bounds.width;
	var gameHeight = this.game.scale.bounds.height;
	var spanHeight = (screenHeight - gameHeight)/2;


	// var dpr = window.devicePixelRatio;
	//
	// if(dpr == 3){
	// 	dpr =  1.75;		//设置为1.75 最完美
	// }else{
	// 	dpr *= 1.1;
	// }
	//
	// var tsWidth = Math.round(176/ this.game.scale.scaleFactor.x/dpr);
	// var tsHeight = Math.round(176 / this.game.scale.scaleFactor.y/dpr);
	// img.style.width = tsWidth + 'px';
	// img.style.width = tsHeight + 'px';
	// img.style.opacity = 1;

	//遮罩
	var img = $('#id_pop_layer_shade')[0];
	img.src = gUserInfo.shadeFileName;
	var tsWidth = Math.round(screenWidth/ this.game.scale.scaleFactor.x);
	var tsHeight = Math.round(screenHeight / this.game.scale.scaleFactor.y);
	img.style.width = screenWidth + 'px';
	img.style.height = screenHeight + 'px';
	img.style.marginTop = -gUserInfo.tsHeight + 'px';
	img.style.opacity = 1;

	var img = $('#id_pop_layer_up')[0];
	img.src = gUserInfo.overFileName;
	img.style.opacity = 1;
	var tsWidth = Math.round(600/ this.game.scale.scaleFactor.x);
	var tsHeight = Math.round(502 / this.game.scale.scaleFactor.y);

	//按钮偏移
	//var tempY = spanHeight + 293/this.game.scale.scaleFactor.y;
	// if(spanHeight == 0){
	// 	var tempY = spanHeight + 253/this.game.scale.scaleFactor.y;
	// }else{
	// 	var tempY = spanHeight + 253/this.game.scale.scaleFactor.y - gUserInfo.tsHeight;
	// }

	var tempY = spanHeight + 253/this.game.scale.scaleFactor.y - gUserInfo.tsHeight;

	if(!gUserInfo.overpicWidth){
		gUserInfo.overpicWidth = tsWidth + 'px';
	}

	if(!gUserInfo.overpicHeight){
		//gUserInfo.overpicHeight = (screenHeight - tempY) +'px';
		gUserInfo.overpicHeight = (tsHeight) +'px';
	}

	if(!gUserInfo.overpicMarginUp){
		gUserInfo.overpicMarginUp = tempY;
	}

	var tempX = this.game.scale.bounds.x + 20/this.game.scale.scaleFactor.x;
	img.style.width = gUserInfo.overpicWidth;
	img.style.height = gUserInfo.overpicHeight;
	img.style.margin = gUserInfo.overpicMarginUp + 'px 0px 0px ' + tempX + 'px';

	//down
	var img = $('#id_pop_layer_down')[0];
	img.src = gUserInfo.overFileName;
	img.style.opacity = 0;
	var tsWidth = Math.round(600/ this.game.scale.scaleFactor.x);
	var tsHeight = Math.round(502 / this.game.scale.scaleFactor.y);
	var tempYDown = tempY + tsHeight;
	img.style.width = gUserInfo.overpicWidth;
	img.style.height = screenHeight - tempYDown- gUserInfo.tsHeight + 'px';
	img.style.margin = tempYDown + 'px 0px 0px ' + tempX + 'px';


	var img = $('#id_pop_layer_btn_close')[0];
	img.src = gUserInfo.btncloseFileName;
	var tsWidth = Math.round(53/ this.game.scale.scaleFactor.x);
	var tsHeight = Math.round(53 / this.game.scale.scaleFactor.y);

	var tempX = this.game.scale.bounds.x + 583/this.game.scale.scaleFactor.x;

	// if(spanHeight == 0){
	// 	var tempYDown = spanHeight + 232/this.game.scale.scaleFactor.x;
	// }else{
	// 	var tempYDown = spanHeight + 232/this.game.scale.scaleFactor.x - gUserInfo.tsHeight;
	// }

	var tempYDown = spanHeight + 232/this.game.scale.scaleFactor.x - gUserInfo.tsHeight;

	img.style.width = tsWidth + 'px';
	img.style.height = tsHeight + 'px';
	img.style.margin = tempYDown + 'px 0px 0px ' + tempX + 'px';
	img.style.opacity = 1;
};

pre_1.prototype.focusIn = function () {
	this.fDialog_home_error.visible = false;
	this.fDialog_home_fourl.visible = false;
	this.fDialog_home_null.visible = false;
};

pre_1.prototype.focusOut = function () {

};

pre_1.prototype.clickLeft = function () {
	this.game.state.states.Video.playClick();
	this.fBall.x = 161;
	gUserInfo.haveBoy = true;
};

pre_1.prototype.clickRight = function () {
	this.game.state.states.Video.playClick();
	this.fBall.x = 350;
	gUserInfo.haveBoy = false;
};
