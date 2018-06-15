var StartGame = function () {
	var storageManager = require("./StorageManager");
	storageManager.Init(function () {
		var hotPatch = require("../Base/HotPatch");
		// hotPatch.WatchFile("../GlobalData");
		// hotPatch.WatchFile("../Game/Platform/platform_base");
		// hotPatch.WatchFile("../Game/Platform/xingji_longzhu_315");

		var netManager = require("./NetManager");
		var gConf = require("../GlobalConf");
		netManager.CreateServer(gConf.GlobalConf.LISTEN_PORT, gConf.GlobalConf.LISTEN_HOST);

		var policySocket = require("./PolicySocket");
		policySocket.CreateServer(843);

		var tickCount = require("./TickCount");
	});
};

exports.StartGame = StartGame;
