var gGame = null;
window.onload = function() {
	gGame = new Phaser.Game(750, 1206, Phaser.CANVAS, "id_game");

	gGame.gameScene = null;
	gGame.shopScene = null;
	gGame.overScene = null;
	gGame.rankScene = null;
	gGame.preloadScene = null;

	gGame.limitChatLayer = null;
	gGame.chatLayer = null;
	gGame.exchangeLayer = null;
	gGame.zhuLayer = null;

	// Add the States your game has.
	gGame.state.add("Boot", Boot);
	gGame.state.add("Video", Video);
	gGame.state.add("Preload", Preload);
	gGame.state.add("Level", Level);
	gGame.state.add("Net", Net);

	gGame.state.start("Boot");
};
