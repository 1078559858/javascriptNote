
var RandomRange = function (from,to) {
	var value = Math.random()*(to-from);
	value += from;
	return value;
};

var RandomInteger = function (to) {
	var value = Math.random()*to;
	var valueInt = Math.floor(value);
	return valueInt;
};

var RandomIntegerRange = function (from,to) {
	var valInt = Math.floor(from + Math.random()*(to-from));
	return valInt;
};

var RandomArrayIndexByWeight = function (array) {
	var all = 0;
	for (var i=0;i<array.length;i++) {
		all += array[i];
	}

	all *= Math.random();

	var add = 0;
	for (i=0;i<array.length;i++) {
		add += array[i];
		if (add >= all) {
			return i;
		}
	}

	return 0;
};

var CloneObject = function (obj) {
	var newObj = {};

	if (obj instanceof Array) {
		newObj = [];
	}
	for (var key in obj) {
		var val = obj[key];
		newObj[key] = typeof val === 'object' ? arguments.callee(val) : val;
	}

	return newObj;
};

Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};

	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	}

	return fmt;
};

function GetFormatDate(date) {
	var dateF = new Date(date);
	return dateF.Format("yyyy-MM-dd hh:mm:ss");
}

var GetNowFormatDate = function () {
	var dateNow = new Date();
	return GetFormatDate(dateNow);
};

var GetDateTickByString = function(strDate) {
	var myDate = new Date(strDate);
	return myDate.getTime();
};

var MessageLog = function (message) {
	var strMessage = GetNowFormatDate();
	for (var i=0;i<arguments.length;i++) {
		strMessage += " ";
		strMessage += arguments[i];
	}
	console.log(strMessage);
};

var CalculateDistance = function (x1,y1,x2,y2) {
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
};

var IsDistanceInScope = function(x1,y1,x2,y2,scope) {
	if (Math.abs(x1-x2) > scope) {
		return false;
	}

	if (Math.abs(y1-y2) > scope) {
		return false;
	}

	return (CalculateDistance(x1,y1,x2,y2) <= scope);
};

var CalculateHash = function(data) {
	var hash = 1315423911;
	for(var i=0;i<data.length;i++) {
		hash ^= ((hash << 5) + data[i] + (hash >> 2));
	}
	return hash;
};

var GetMd5 = function(argValue) {
	var crypto = require('crypto');
	var md5 = crypto.createHash('md5');
	md5.update(argValue);
	var result = md5.digest('hex');
	return result;
};

var GetFileMd5 = function (path,callback) {
	var fs = require('fs');
	fs.exists(path,function (exis) {
		if (!exis) {
			return;
		}

		var crypto = require('crypto');
		var md5sum = crypto.createHash('md5');
		var stream = fs.createReadStream(path);
		stream.on('data', function(chunk) {
			md5sum.update(chunk);
		});
		stream.on('end', function() {
			var md5Str = md5sum.digest('hex').toLowerCase();
			callback(md5Str);
		});
	});
};

var QuickSort = function(array,key){
	array.sort(function (a,b) {
		return (b[key]-a[key]);
	});
	return array;
};

var IsStringInArray = function (str,array) {
	for (var i=0;i<array.length;i++) {
		if (array[i] == str) {
			return true;
		}
	}
	return false;
};

var GetShortID = function () {
	var shortID = require("shortid").generate();
	return shortID;
};

var GetPlatform = function () {
	var vOS = require('os');
	var vPlatform = vOS.platform();

	return vPlatform;//linux win32
};

exports.MessageLog = MessageLog;
exports.RandomRange = RandomRange;
exports.RandomInteger = RandomInteger;
exports.RandomIntegerRange = RandomIntegerRange;
exports.RandomArrayIndexByWeight = RandomArrayIndexByWeight;
exports.CloneObject = CloneObject;
exports.CalculateDistance = CalculateDistance;
exports.IsDistanceInScope = IsDistanceInScope;
exports.CalculateHash = CalculateHash;
exports.GetNowFormatDate = GetNowFormatDate;
exports.GetFormatDate = GetFormatDate;
exports.GetMd5 = GetMd5;
exports.GetFileMd5 = GetFileMd5;
exports.QuickSort = QuickSort;
exports.GetShortID = GetShortID;
exports.GetPlatform = GetPlatform;

exports.GetDateTickByString = GetDateTickByString;
exports.IsStringInArray = IsStringInArray;
