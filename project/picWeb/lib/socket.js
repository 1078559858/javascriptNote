// ajax 对象
var CreateAjaxObject = function() {
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
};

// ajax post请求：
var CreateAjaxPost = function(url,data,callback) {
	var ajax = CreateAjaxObject();
	if (!ajax) {
		callback(null);
		return;
	}

	ajax.open("POST",url,true );
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
};