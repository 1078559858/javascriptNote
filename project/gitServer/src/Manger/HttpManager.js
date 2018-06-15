
var StartHttp = function (port) {
	var hotPatch = require("../Base/HotPatch");
	hotPatch.WatchFile("../Manager/WebLogic");

	var webServer = require("./WebServer");
	webServer.CeaateHttpServer(port);
};

exports.StartHttp = StartHttp;
