var gGame = null;
window.onload = function() {
	gGame = new Phaser.Game(750, 1206, Phaser.CANVAS, "id_game");

	// Add the States your game has.
	gGame.state.add("Boot", Boot);
	gGame.state.add("Video", Video);
	gGame.state.add("Preload", Preload);
	gGame.state.add("Level", Level);

	gGame.state.start("Boot");
};
