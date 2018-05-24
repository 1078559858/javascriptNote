var Forecast = function () {
	console.log("预测");
	console.log(GlobalConf.picData64);

	var obj ={};
	obj.api_key = GlobalConf.gameID;
	obj.api_secret = GlobalConf.gameSecret;
	//obj.image_base64 = GlobalConf.picData64;

	CreateAjaxPost(GlobalConf.detectURL, obj, function () {

	});
};