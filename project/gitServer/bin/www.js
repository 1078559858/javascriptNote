#!/usr/bin/env node

var gOptimist = require("optimist").argv;
var gConf = require("../src/GlobalConf");

var gUtil = require("../src/Base/GlobalUtils");

process.on("uncaughtException", function (err) {
    gUtil.MessageLog("error",err);
    gUtil.MessageLog("error",err.stack);
});

if (gOptimist.listenHost) {
    gConf.GlobalConf.LISTEN_HOST = gOptimist.listenHost;
}

if (gOptimist.listenPort) {
    gConf.GlobalConf.LISTEN_PORT = gOptimist.listenPort;
}

if (gOptimist.httpPort) {
    gConf.GlobalConf.HTTP_PORT = gOptimist.httpPort;
}

if(gOptimist.serverURL){
    gConf.GlobalConf.SERVER_URL = gOptimist.serverURL;
}

if (gOptimist.preFix) {
    gConf.GlobalConf.GAME_PREFIX = gOptimist.preFix;
}

var gHttpManager = require("../src/Manager/HttpManager");
gHttpManager.StartHttp(gConf.GlobalConf.HTTP_PORT);

// var gApp = require("../src/Game/app");
// gApp.StartGame();
