var wxshareConf = {
	'appId':'wx80839de5b232cf04',
	'appSecret':'c3e65b9428ede1687e65f45562aa12ab'
};

var wxGetToken = function (callback) {
	var url = 'https://api.weixin.qq.com/cgi-bin/token';
	url += "?grant_type=client_credential";
	url += "&appid=";
	url += wxshareConf.appId;
	url += "&secret=";
	url += wxshareConf.appSecret;

	GlobalSocket.createGet(url, function (result) {
		callback && callback(result);

		alert(JSON.stringify(result));
	})
};

var wxPostToken = function (callback) {
	var url = 'https://api.weixin.qq.com/cgi-bin/token';
	url += "?grant_type=client_credential";
	url += "&appid=";
	url += wxshareConf.appId;
	url += "&secret=";
	url += wxshareConf.appSecret;

	console.log(url);

	GlobalSocket.CreateAjaxPost(url, {}, function (result) {
		callback && callback(result);

		console.log(JSON.stringify(result));
	})
};

var wxPostLocalHost = function (callback) {
	var url = (location.href.split('#')[0]);
	var eURL = encodeURIComponent(url);
	var dURL = decodeURIComponent(url);

	var pUrl = 'http://yangmengmeng.com:11000';

	var data = {};
	data.url = url;

	$.post(pUrl, data, function(data,status){
		callback && callback(data);
	});
};

wx.ready(function () {
	alert('微信认证OK8');

	wx.onMenuShareAppMessage({
		title: '互联网之子',
		desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
		link: 'http://www.yangmengmeng.com/index.html',
		imgUrl: 'http://www.yangmengmeng.com/wxShare.png',
		trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			alert('用户点击发送给朋友');
		},
		success: function (res) {
			alert('已分享');
		},
		cancel: function (res) {
			alert('已取消');
		},
		fail: function (res) {
			alert(JSON.stringify(res));
		}
	});

	wx.onMenuShareTimeline({
		title: '相约98.  “码”上中奖 ',
		desc: '我们诚挚邀请您莅临第十九届投洽会三维码科技体验馆，体验不一样的三维码时代产品，更有多重好礼等您来！',
		link: 'http://www.yangmengmeng.com/index.html',
		imgUrl: 'http://www.yangmengmeng.com/wxShare.png',
		trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			alert('用户点击发送给朋友圈');
		},
		success: function (res) {
			alert('已分享');
		},
		cancel: function (res) {
			alert('已取消');
		},
		fail: function (res) {
			alert(JSON.stringify(res));
		}
	});

	wx.error(function(res){

		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
		alert("微信验证失败");
	});
});

