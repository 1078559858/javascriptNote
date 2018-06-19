var sign = require('./sign.js');
var gPlatformBase = require('./base/platform_base');
var gUtils = require('./base/GlobalUtils');
var gConf = require('./base/GlobalConf');

//console.log(sign('jsapi_ticket', 'http://example.com'));
/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */

var getToken = function (callback) {
	gUtils.MessageLog(gConf.GlobalConf.tokenVailedTime);
	gUtils.MessageLog(Date.now());
	if(gConf.GlobalConf.tokenVailedTime > Date.now()){
		callback && callback(true);
		return;
	}

	var url = 'https://api.weixin.qq.com/cgi-bin/token';
	url += "?grant_type=client_credential";
	url += "&appid=";
	url += gConf.GlobalConf.appId;
	url += "&secret=";
	url += gConf.GlobalConf.appSecret;

	gPlatformBase.HttpGetFunction(url, function (result) {
		if(result && result.access_token && result.expires_in){
			gConf.GlobalConf.token = result.access_token;
			var tTime =  Date.now() + result.expires_in *1000 - 10*60*1000;
            gConf.GlobalConf.tokenVailedTime = tTime;
			callback && callback(true);
		}else {
			callback && callback(false);
		}
	})
};

var getJSApiTicket = function (callback) {
	if(gConf.GlobalConf.jsapiTicketVailedTime > Date.now()){
		callback && callback(true);
		return;
	}

	var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';
	url += "?type=jsapi";
	url += "&access_token=";
	url += gConf.GlobalConf.token;

	gPlatformBase.HttpGetFunction(url, function (result) {
		if(result && result.ticket && result.expires_in){
			gConf.GlobalConf.jsapiTicket = result.ticket;
			gConf.GlobalConf.jsapiTicketVailedTime = Date.now() + result.expires_in *1000 - 10*60*1000;
			callback && callback(true);
		}else {
			callback && callback(false);
		}
	})
};

var getSign = function (url) {
	var ticket = gConf.GlobalConf.jsapiTicket;
	return sign(ticket, url);
};

exports.GetToken = getToken;
exports.GetJSAPITicket = getJSApiTicket;
exports.GetSign = getSign;
