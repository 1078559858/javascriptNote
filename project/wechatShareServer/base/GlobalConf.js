var conf = {
	// 'appId':'wx80839de5b232cf04',	//自己
	// 'appSecret':'c3e65b9428ede1687e65f45562aa12ab',//自己
	'appId':'wx5dd17d4f5868723a',	//boss
	'appSecret':'b64daf077e69de72ea7cd3b90d93e694',	//boss
	"token":"",					//保存token，每个token存在7200秒
	"tokenVailedTime":0,			//token失效时间
	'jsapiTicket':"",				//调用js接口的临时票据
	"jsapiTicketVailedTime":0,	//临时票据的失效时间
	'test':"test"
};


exports.GlobalConf = conf;
