/**
 * Created by wxy on 2016/4/26.
 */

Date.prototype.Format = function (fmt) {
	var vFmt = fmt;
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};

	if (/(y+)/.test(vFmt)) {
		vFmt = vFmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(vFmt)) vFmt = vFmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	}

	return vFmt;
};

var GlobalUtils = {
	"GetNonceStr":function (len) {
		len = len || 32;

		var pwd = '';
		var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

		for(var i = 0; i < len; i++){
			pwd += chars.charAt(Math.floor(Math.random()*chars.length));
		}

		return pwd;
	},
	"RandomRange":function (from,to) {
		var value = Math.random()*(to-from);
		value += from;
		return value;
	},
	"RandomIntegerRange":function (from,to) {
		var value = Math.random()*(to-from);
		value += from;
		return Math.round(value);
	},
	"CloneObject":function (obj) {
		var newObj = {};

		if (obj instanceof Array) {
			newObj = [];
		}
		for (var key in obj) {
			var val = obj[key];
			newObj[key] = typeof val === 'object' ? arguments.callee(val) : val;
		}

		return newObj;
	},
	"GetFormatDate":function (date) {
		return date.Format("yyyy-MM-dd hh:mm:ss");
	},
	"GetNowFormatDate":function () {
		var dateNow = new Date();
		return this.GetFormatDate(dateNow);
	},
	"MessageLog":function (message) {
		return;
		//var strMessage = this.GetNowFormatDate();
		var strMessage = "";
		for (var i=0;i<arguments.length;i++) {
			strMessage += " ";
			strMessage += arguments[i];
		}
		console.log(strMessage);
	},
	"CalculateDistance": function (x1,y1,x2,y2) {
		return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	},
	"IsDistanceInScope":function(x1,y1,x2,y2,scope) {
		if (Math.abs(x1-x2) > scope) {
			return false;
		}

		if (Math.abs(y1-y2) > scope) {
			return false;
		}

		return (myGlobalUtils.CalculateDistance(x1,y1,x2,y2) <= scope);
	},
	"CalculateHash":function(data) {
		var hash = 1315423911;
		for (var i = 0; i < data.length; i++) {
			var value = data[i];
			//console.log("计算哈希 v-" + i + " : " + value);
			hash ^= ((hash << 5) + value + (hash >> 2));
		}
		return hash;
	},
	"MyCalculateHash":function(data) {
		var hash = 1315423911;
		for(var i=0;i<data.byteLength;i++)
		{
			var value = data.getUint8(i);
			//console.log("计算哈希 v-" + i + " : " + value);
			hash ^= ((hash << 5) + value + (hash >> 2));
		}
		return hash;
	},
	"GetMd5":function(argValue) {
		var crypto = require('crypto');
		var md5 = crypto.createHash('md5');
		md5.update(argValue);
		var result = md5.digest('hex');
		return result;
	},
	"CopyAttributeData":function(attr,from,to,defValue) {
		to[attr] = defValue;
		if (from.hasOwnProperty(attr) && from[attr] != undefined) {
			to[attr] = from[attr];
		}
	},
	"SliceWords":function (str,len) {
		len = len || 33*5;


		var arr = [];
		var wordLen = 0;
		var start = 0;
		for(var i = 0; i < str.length; i++){
			if(str.charCodeAt(i) > 256){ //hanzi
				wordLen += 33;
			}else{
				wordLen += 18;
			}

			if(wordLen > len){
				arr.push(str.substring(start, i + 1));
				start = i + 1;
				wordLen = 0;
			}
		}

		arr.push(str.substring(start, i));

		return arr;
	},
	"getMiddleNumber":function (little, big, value) {
		if(value < little){
			return value;
		}

		if(value > big){
			return big;
		}

		return value;
	}
};

var FormatNumber = {
	"chineseCharacter":function (value,fixed) {
		if(value < 10000){
			return value;
		}

		if(value % 10000 === 0){
			value = (value/10000).toFixed(0);
			value += "万";
			return value;
		}

		value -= value%1000;
		value = (value/10000).toFixed(fixed);
		value += "万";

		return value;
	},
	"twoNumber":function (value, fixed) {
		value = Number(value) || 0;

		value = value * Math.pow(10, fixed + 1);//
		value = Math.round(value);				//
		value /= 10;							//
		value = Math.floor(value);				//
		value /= Math.pow(10,fixed);			//转化为小数
		value = Number(value.toFixed(fixed));	//转化为number
		return  value;
	},
	"symbol":function (value) {
		value = Math.round(value);
		return value.toString().replace(/(?!^)(\d{3})(?=(?:\d{3})*$)/g,',$1');
	},
	"checkArrHasNumber":function (arr, value) {
		value = Number(value);

		for(var i = 0; i < arr.length; i++){
			if(arr[i] === value){
				return true;
			}
		}

		return false;
	}
};

var GlobalSocket = {
	"CreateAjaxObject":function () {
		var xmlHttp;
		try {
			// Firefox, Opera 8.0+, Safari
			xmlHttp = new XMLHttpRequest();
		}
		catch (e) {
			// Internet Explorer
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					return false;
				}
			}
		}
		return xmlHttp;
	},
	"CreateAjaxPost":function (url, data, callback) {
		var ajax = this.CreateAjaxObject();
		if (!ajax) {
			callback(null);
			return;
		}

		ajax.open("POST",url,true );
		ajax.setRequestHeader( "Access-Control-Allow-Origin",'*');
		ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
		ajax.onreadystatechange = function () {
			if( ajax.readyState == 4 ) {
				if( ajax.status == 200 ) {
					callback(ajax.responseText);
				}
				else {
					callback(null);
					console.log("HTTP请求错误！错误码："+ajax.status);
				}
			}
		};
		ajax.send(data);
	},
	"createGet":function (url, callback) {
		$.get(url, function (result) {
			callback && callback(result);
		}).error(function () {
			callback && callback(null);
		});
	}
};


//test
