var gUtil = require("./base/GlobalUtils");
var gConf = require('./base/GlobalConf');
var queryString = require("querystring");
var libHttp = require('http');  //HTTP协议模块
var gCheckSign = require('./check_sign');

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
			processGet(req,res);
		}
		else if (req.method.toLowerCase() == "post") {
			res.writeHead(200, headOut);
			processPost(req,res);
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

var processPost = function (req, res) {
	//暂存请求体信息
	var body = "";

	//请求链接
	gUtil.MessageLog("POST",JSON.stringify(req.url));

	//每当接收到请求体数据，累加到post中
	req.on('data', function (chunk) {
		body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
	});

	//在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	req.on('end', function () {
		// 解析参数
		try{
			var obj = queryString.parse(body);

			if(obj.url){
				obj.url = decodeURIComponent(obj.url);
			}

			gCheckSign.GetToken(function (getTokenSucceed) {
				if(getTokenSucceed){
					gUtil.MessageLog("token:" , gConf.GlobalConf.token);

					gCheckSign.GetJSAPITicket(function (getTickSucceed) {
						if(getTickSucceed){
							gUtil.MessageLog("jsapiTicket:" , gConf.GlobalConf.jsapiTicket);

							var tObj = gCheckSign.GetSign(obj.url);
							var rObj = {};
							rObj.timestamp = tObj.timestamp;
							rObj.nonceStr = tObj.nonceStr;
							rObj.signature = tObj.signature;
							rObj.appId = gConf.GlobalConf.appId;
							rObj.url = obj.url;

							res.write(JSON.stringify(rObj));
							res.end();
						}else{
							res.write("");
							res.end();
						}
					})
				}else{
					res.write("");
					res.end();
				}
			});
		}catch(err){
			res.write("");
			res.end();
		}
	});
};

var processGet = function (req, res) {
	//获取请求的url
	var reqUrl = req.url;

	//向控制台输出请求的路径
	gUtil.MessageLog("Get",JSON.stringify(req));

	res.end(JSON.stringify(reqUrl));
	return;
};


CeaateHttpServer(11000);