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

var wxshareConf = {
	'appId':'wx80839de5b232cf04',
	'appSecret':'c3e65b9428ede1687e65f45562aa12ab'
};

var getToken = function (callback) {
	if(gConf.GlobalConf.tokenVailedTime > Date.now()){
		callback && callback(true);
		return;
	}

	var url = 'https://api.weixin.qq.com/cgi-bin/token';
	url += "?grant_type=client_credential";
	url += "&appid=";
	url += wxshareConf.appId;
	url += "&secret=";
	url += wxshareConf.appSecret;

	gPlatformBase.HttpGetFunction(url, function (result) {
		if(result && result.access_token && result.expires_in){
			gConf.GlobalConf.token = result.access_token;
			gConf.GlobalConf.tokenRegisterTime = Date.now() + result.expires_in *1000 - 10*60*1000;
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
