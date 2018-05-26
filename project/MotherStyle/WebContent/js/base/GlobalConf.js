/**
 * Created by Administrator on 2017/3/23.
 */
//游戏基础设置
var gGameConf = {
    width:640,      		//游戏设计宽度
    height:1236,     		//游戏设计高度
	"update":60,			//游戏一秒内update调用次数
	'render':0.5,			//游戏一秒内render的次数（1：60次；2：120次）
	"stop":false			//关闭游戏
};


//设置信息
var gSettingInfo = {
	"music":true,			//音乐
	"sound":true,			//音效
	"newBie":false,		//新手系统
	"gSettingInfo":"gSettingInfo"
};

//玩家信息
var gUserInfo = {
	"nick":"",
	"haveBoy":false,
	"choice":[]
};
