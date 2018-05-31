/**
 * Preload state.
 */

var gPreload = {};
gPreload.isLogin = false;
gPreload.isLoadOver = false;


var gResSpinrPath = "./assets/spine/";
var gResSpine = {
	//"texiao":gResSpinrPath + "texiao.json"
};

function Preload() {
	Phaser.State.call(this);
}

var proto = Object.create(Phaser.State);
Preload.prototype = proto;


// Phaser.World.prototype.displayObjectUpdateTransform = function() {
// 	var game = this.game;
//
// 	if(game.scale.correct) {
// 		this.x = game.camera.y + game.width;
// 		this.y = -game.camera.x;
// 		this.rotation = Phaser.Math.degToRad(Phaser.Math.wrapAngle(90));
// 	} else {
// 		this.x = -game.camera.x;
// 		this.y = -game.camera.y;
// 		this.rotation = 0;
// 	}
//
// 	PIXI.DisplayObject.prototype.updateTransform.call(this);
// };

Preload.prototype.preload = function() {
	var game = this.game;

	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	// this.scale.pageAlignHorizontally = true;
	// this.scale.pageAlignVertically = true;

	// var bounding = this.game.canvas.getBoundingClientRect();
	// if(bounding.width/ this.game.width < bounding.height/this.game.height){
	// 	this.scale.pageAlignHorizontally = true;
	// }else{
	// 	this.scale.pageAlignVertically = true;
	// }

	// if(game.scale.isLandscape) {
	// 	game.scale.correct = true;
	// 	game.scale.setGameSize(gGameConf.width, gGameConf.height);
	// } else {
	// 	game.scale.correct = false;
	// 	game.scale.setGameSize(gGameConf.height, gGameConf.width);
	// }

	// game.scale.onOrientationChange.add(function() {
	// 	if(game.scale.isLandscape) {
	// 		game.scale.correct = true;
	// 		game.scale.setGameSize(gGameConf.width, gGameConf.height);
	// 	} else {
	// 		game.scale.correct = false;
	// 		game.scale.setGameSize(gGameConf.height, gGameConf.width);
	// 	}
	// }, this);


	//this.game.state.states.Net.createNet();

	var count = 0;
	gGame.preloadScene = new preloadScene(this.game);
	gGame.preloadScene.initOnce();
	this.load.setPreloadSprite(gGame.preloadScene.fProcessbar);
	// this.load.onPackComplete.add(function (process) {
	// 	count++;
	// 	gGame.preloadScene.fPer.text = Math.min(count * 17 , 100) + "%";
	// 	//console.log(process);
	// }, this);

	gGame.add.plugin(PhaserSpine.SpinePlugin);
	gGame.add.plugin(PhaserInput.Plugin);
	gGame.stage.disableVisibilityChange = false;	//失去焦点后继续运行
	gGame.onBlur.add(function () {
		gGameConf.stop = true;
	},this);

	for(var vSpineName in gResSpine){
		this.game.load.spine(vSpineName, gResSpine[vSpineName]);
	}

	this.load.pack("preSetName","assets/pack.json");
	this.load.pack("over","assets/pack.json");
	this.load.pack("colorAtlas","assets/pack.json");
	this.load.pack("ninePic","assets/pack.json");
	// this.load.bitmapFont("yellow", "assets/fnt/yellow_0.png", "assets/fnt/yellow.xml");
	// this.load.bitmapFont("myBetText", "assets/fnt/mine_0.png", "assets/fnt/mine.xml");
	// this.load.bitmapFont("totalBetText", "assets/fnt/total_0.png", "assets/fnt/total.xml");
};

Preload.prototype.create = function() {
	gPreload.isLoadOver = true;

};

Preload.prototype.update = function(){
	if(gPreload.isLoadOver){
		this.game.state.start("Level");
	}
};

Preload.prototype.loginGame = function(){
	gPreload.isLogin = true;
};