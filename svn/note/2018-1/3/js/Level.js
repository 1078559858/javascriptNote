/**
 * Level state.
 */

function Level() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Level.prototype = proto;

Level.prototype.create = function() {
	gGame.gameScene = new mainScene(this.game);
	this.game.time.desiredFps = gGameConf.update;
	this.game.time.slowMotion = gGameConf.render;
	// this.game.time.events.loop(Phaser.Timer.SECOND, function () {
	// 	console.log("loop")
	// }, this);

	gGame.gameScene.createInit();
	gGame.gameScene.fPlayerPrefab.initOnce();
	gGame.gameScene.fBetChoicePrefab.initOnce();
	gGame.gameScene.fMenuLayer.initOnce();
	gGame.gameScene.fAllFootballers.initOnce();

	//1 8082
	// if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	// 	bodyTag = document.getElementsByTagName('body')[0];
	// 	bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
	// }

	//2 8083
	// $('#id_game').css("height",window.innerHeight+100);
	// window.scrollTo(0, 1);

	//.3 8084
	$('#id_game').css("height",window.innerHeight+100);
	window.scrollTo(0, 1);
	$("#id_game").css("height",window.innerHeight);
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
};

Level.prototype.update = function(){

};

Level.prototype.quitGame = function() {
	
};

Level.prototype.preload = function () {

};

Level.prototype.render = function () {
	//this.game.debug.text(this.game.time.suggestedFps, 200, 200, '#000000', '26px Courier');
};

