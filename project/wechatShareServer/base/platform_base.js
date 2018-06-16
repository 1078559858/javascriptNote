var gUtil = require("./GlobalUtils");
var http = require("https");

var isGoodJsonParse = function (fStr) {
	try {
		JSON.parse(fStr);
		return true;
	}catch (e){
		gUtil.MessageLog("is bad Json: " + e);
		return false;
	}
};

//request 重定向
var myRequest =(function(_request){
	return function(options,callback){
		var timeout=options['timeout'], timeoutEventId;
		var req=_request(options,function(res){
			res.on('end',function(){
				clearTimeout(timeoutEventId);
				gUtil.MessageLog('微信分享：response end...');
			});

			res.on('close',function(){
				clearTimeout(timeoutEventId);
				gUtil.MessageLog('微信分享：response close...');
			});

			res.on('abort',function(){
				gUtil.MessageLog('微信分享：abort...');
			});

			callback(res);
		});

		//超时
		req.on('timeout',function(){
			req.res && req.res.abort();
			req.abort();
		});

		//如果存在超时
		timeout && (timeoutEventId=setTimeout(function(){
			req.emit('timeout',{message:'微信分享：have been timeout...'});
		},timeout));
		return req;
	};

})(http.request);

var httpPostFunction = function (hosturl, url, callback) {
	gUtil.MessageLog("httpPost: http://"+ hosturl + " , reqURL: " + url);
	var vDataTemp = "";
	var vOutData = JSON.stringify({});

	var vOptions = {
		host: hosturl,
		port:80,
		path: url,
		method: 'POST',
		timeout:30000,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': vOutData.length
		}
	};

	var vReq = myRequest(vOptions, function(res) {
		res.on('data', function (fChunk) {
			vDataTemp += fChunk;
		}).on("end", function () {
			if(isGoodJsonParse(vDataTemp)){
				callback(JSON.parse(vDataTemp));
			}else{
				gUtil.MessageLog("bad json: ", JSON.stringify(vDataTemp));
				callback(null);
			}
		});
	});

	if(vReq){
		var isSend = false;

		vReq.on("error", function (fError) {
			isSend = true;
			gUtil.MessageLog("微信分享 post error!");
			gUtil.MessageLog("error: " + JSON.stringify(fError));
			callback(null);
		}).on("timeout", function(fError){
			isSend = true;
			gUtil.MessageLog("微信分享 post time out!");
			gUtil.MessageLog("error: " + JSON.stringify(fError));
			//callback(null);
		});

		gUtil.MessageLog("test log: isSend" + isSend);
		if (isSend){
			//callback(null);
		}

		vReq.write(vOutData);
		vReq.end();
	}else{
		gUtil.MessageLog("微信分享 request is not exit!");
		callback(null);
	}
};

var httpGetFunction = function (url, callback) {
	gUtil.MessageLog("httpRequest:" + url);

	var data = "";
	http.get(url, function (res) {
		res.on("data",function (resData) {
			data += resData;
		}).on("end", function () {
			gUtil.MessageLog("httpResponse:" + data);

			if(isGoodJsonParse(data)){
				callback(JSON.parse(data));
			}else{
				callback(null);
			}
		}).on("error",function (fErr) {
			gUtil.MessageLog("httpResponse get error:" + JSON.stringify(fErr));
			callback(null);
		});
	}).setTimeout(15000, function () {
		gUtil.MessageLog("httpResponse get timeout!");
		callback(null);
	});
};

exports.HttpPostFunction = httpPostFunction;
exports.HttpGetFunction = httpGetFunction;