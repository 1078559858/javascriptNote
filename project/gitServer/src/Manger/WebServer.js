var gUtil = require("../Base/GlobalUtils");
var libHttp = require('http');  //HTTP协议模块

var headOut = {};
headOut["Access-Control-Allow-Origin"] = "*";
headOut["Access-Control-Allow-Methods"] = "POST,GET,OPTIONS";
headOut["Access-Control-Allow-Headers"] = "content-type";
headOut["Access-Control-Max-Age"] = "3600";
headOut["content-type"] = "text/plain";

var CeaateHttpServer = function (port) {
	var webSvr = libHttp.createServer(function (req,res) {
		if (req.method.toLowerCase() == "get") {
			res.writeHead(200, headOut);
			var webLogic = require("./WebLogic");
			webLogic.ProcessGet(req,res);
		}
		else if (req.method.toLowerCase() == "post") {
			res.writeHead(200, headOut);
			var webLogic = require("./WebLogic");
			webLogic.ProcessPost(req,res);
		}
		else {
			res.end("我啥也不知道");
		}
	});

//指定服务器错误事件响应
	webSvr.on("error", function (error) {
		//在控制台中输出错误信息
		gUtil.MessageLog(error);
	});

//开始侦听8124端口
	webSvr.listen(port, function () {
		//向控制台输出服务启动的信息
		gUtil.MessageLog('WebServer running at prot',port);
	});
};

exports.CeaateHttpServer = CeaateHttpServer;
