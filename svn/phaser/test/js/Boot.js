/**
 * Boot state.
 */
function Boot() {
	Phaser.State.call(this);
}

var proto = Object.create(Phaser.State);
Boot.prototype = proto;

Boot.prototype.init = function() {
	//this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	//this.scale.pageAlignHorizontally = true;
	//this.scale.pageAlignVertically = true;

	// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// var bounding = this.game.canvas.getBoundingClientRect();
	// if(bounding.width/ this.game.width > bounding.height/this.game.height){
	// 	this.scale.pageAlignHorizontally = true;
	// }else{
	// 	this.scale.pageAlignVertically = true;
	// }
};

Boot.prototype.preload = function() {
	this.load.pack("boot", "assets/assets-pack.json");
	this.load.bitmapFont("yellow", "assets/fnt/yellow_0.png", "assets/fnt/yellow.xml");
};

Boot.prototype.create = function() {
	this.game.state.start("Preload");
};
