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

var CreatePost = function (url, data, callback) {
	//url = url || "https://api-cn.faceplusplus.com/facepp/v3/detect";
	url = url || "https://api-cn.faceplusplus.com/facepp/v3/face/getdetail";
	data = data || {
		"api_key":"st6qF_2cu4tPpf9MMCXcJHIBMdxcyC3B",
		"api_secret":"4MLfkQiwKW4djLj0ieQu0tLP4tXq6XJW",
		"face_token":"83ba92dccde3f73f940987736f6df0f3"
	};

	$.post(url, data, function (data, status) {
		alert("data:" + JSON.stringify(data) + " ,status:" + status);
		callback && callback(true);
	})
};

// ajax post请求：formdata类型数据  未完成，实现待
var CreateAjaxPostFormData = function(url,data,callback) {
	var ajax = CreateAjaxObject();
	if (!ajax) {
		callback(null);
		return;
	}

	var form = new FormData();
	form.append("api_key", "st6qF_2cu4tPpf9MMCXcJHIBMdxcyC3B");

	// ajax.send(form);
};