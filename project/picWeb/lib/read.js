var ReadPic = function (path, callback) {

};

var PreviewPic = function (fileDom, callback){
	//判断是否支持FileReader
	if (window.FileReader) {
		var reader = new FileReader();
	} else {
		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	}

	//获取文件
	var file = fileDom.files[0];
	var imageType = /^image\//;
	//是否是图片
	if (!imageType.test(file.type)) {
		alert("请选择图片！");
		return;
	}

	//读取完成
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		// //获取图片dom
		// var img = document.getElementById("image_base64");
		// //图片路径设置为读取的图片
		// img.src = e.target.result;

		//GlobalConf.picData64 =  e.target.result;
		callback && callback(e.target.result);
	};
};

// var file = document.getElementById("imgFile");
// var fd = new FormData();
// fd.append(file.files[0].name, file.files[0]);

