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
};

Level.prototype.update = function(){

};

Level.prototype.quitGame = function() {
	
};

Level.prototype.render = function () {
	//this.game.debug.text(this.game.time.suggestedFps, 200, 200, '#000000', '26px Courier');
};

