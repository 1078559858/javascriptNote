/**
 * Preload state.
 */

var gPreload = {};
gPreload.isLogin = false;
gPreload.isLoadOver = false;


var gResSpinrPath = "./assets/spine/";
var gResSpine = {
	"bisanguo":gResSpinrPath + "bisanguo.json"
};

function Preload() {
	Phaser.State.call(this);
}

var proto = Object.create(Phaser.State);
Preload.prototype = proto;


// Phaser.World.prototype.displayObjectUpdateTransform = function() {
// 	var game = this.game;
// 	if(!game.scale.correct) {
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
	var bounding = this.game.canvas.getBoundingClientRect();

	// if(bounding.width/ this.game.width > bounding.height/this.game.height){
	// 	this.scale.pageAlignHorizontally = true;
	// }else{
	// 	this.scale.pageAlignVertically = true;
	// }
	//
	// if(game.scale.isLandscape) {
	// 	game.scale.correct = true;
	// 	game.scale.setGameSize(gGameConf.width, gGameConf.height);
	// } else {
	// 	game.scale.correct = false;
	// 	game.scale.setGameSize(gGameConf.height, gGameConf.width);
	// }
	//
	// game.scale.onOrientationChange.add(function() {
	// 	if(game.scale.isLandscape) {
	// 		game.scale.correct = true;
	// 		game.scale.setGameSize(gGameConf.width, gGameConf.height);
	// 	} else {
	// 		game.scale.correct = false;
	// 		game.scale.setGameSize(gGameConf.height, gGameConf.width);
	// 	}
	// }, this);


	this.game.state.states.Net.createNet();
	
	gGame.preloadScene = new preloadScene(this.game);
	this.load.setPreloadSprite(gGame.preloadScene.fProcessBar);

	gGame.add.plugin(PhaserSpine.SpinePlugin);
	gGame.add.plugin(PhaserInput.Plugin);
	gGame.stage.disableVisibilityChange = true;	//失去焦点后继续运行
	// for(var vSpineName in gResSpine){
	// 	this.game.load.spine(vSpineName, gResSpine[vSpineName]);
	// }

	//这个可以优化一下，取MP3和ogg两种格式
	for(var vMusicName in gVideoMusic){
		this.game.load.audio(vMusicName, gVideoMusic[vMusicName]);
	}

	 this.load.pack("main","assets/assets-pack.json");
	 //this.load.pack("table","assets/pack.json");
	this.load.bitmapFont("yellow", "assets/fnt/yellow_0.png", "assets/fnt/yellow.xml");
};

Preload.prototype.create = function() {
	gPreload.isLoadOver = true;
	
	gGame.state.states.Video.initVideo();
};

Preload.prototype.update = function(){
	if(gPreload.isLogin && gPreload.isLoadOver){
		this.game.state.start("Level");
	}
};

Preload.prototype.loginGame = function(){
	gPreload.isLogin = true;
};