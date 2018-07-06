/**
 * Created by Administrator on 2017/3/23.
 */
//游戏基础设置
var gGameConf = {
    width:750,      		//游戏设计宽度
    height:1206,     		//游戏设计高度
	"update":60,			//游戏一秒内update调用次数
	'render':0.5,			//游戏一秒内render的次数（1：60次；2：120次）
	"getURL":"http://192.168.0.101:40040/game",
	"chongzhiURL":"http://www.baidu.com",//充值界面
    url:"ws://192.168.0.101:10001",  	//本地服务器
    //url:"ws://ts.madgame.cn:44973",  		//racing_test
    //url:"ws://ns.madgame.cn:21101",  		//racing_longzhu
    nick:"xingji"
};

//游戏配置参数
var gRoomConf = {
	"banker_power_level": [100000, 200000, 300000, 500000, 800000, 1000000],		//挑战档位
	"state": {
		"idle": {
			"nick": "idle",
			"descript": "休息时间",
			"remain": 5000
		},
		"half1": {
			"nick": "half1",
			"descript": "上半场比赛",
			"remain": 10000
		},
		"half2": {
			"nick": "half2",
			"descript": "上半场比赛",
			"remain": 10000
		},
		"half3": {
			"nick": "half3",
			"descript": "上半场比赛",
			"remain": 10000
		},
		"half4": {
			"nick": "half4",
			"descript": "上半场比赛",
			"remain": 15000
		},
		"rest": {
			"nick": "rest",
			"descript": "中场休息",
			"remain": 2000
		},
		"half5": {
			"nick": "half5",
			"descript": "上半场比赛",
			"remain": 10000
		},
		"half6": {
			"nick": "half6",
			"descript": "上半场比赛",
			"remain": 10000
		},
		"half7": {
			"nick": "half7",
			"descript": "上半场比赛",
			"remain": 10000
		},
		"half8": {
			"nick": "half8",
			"descript": "上半场比赛",
			"remain": 15000
		},
		"result": {
			"nick": "result",
			"descript": "比赛结果",
			"remain": 2000
		},
		"bonus": {
			"nick": "bonus",
			"descript": "比赛结束",
			"remain": 3000
		}
	}
};

//房间信息
var gRoomInfo = {
	"remain":5000,
	"state":"idle",
	"gameNum":1,
	"leftTeam":{"nick":"摩幻","score":0, "members":[]},
	"rightTeam":{"nick":"龙珠","score":0, "members":[]},
	"membersRace":{},
	"fistRun":true,						//游戏第一次运行
	"betPrice":[],							//游戏奖励倍数
	"rankList":[],							//排行榜
	"bonusResult":{},						//开奖结果
	"historyResult":[],					//历史开奖结果
	"seats":[{},{},{},{},{},{},{},{},{}],	//座位有人
	"tenBetHistory":[],					//最近十次投注记录


	//"activityObj":{},				//存储一些活动对象，比如玩家头像等延迟任务数据
	"test":"test"
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
	"user": GlobalTemp.uid || "uid_user",         			//玩家账号
	"pwd":"123",        			//玩家密码

	"uid":"",
	"nick":"testNick",
	"url":"http://server.com/explode.png",
	"newbie":false,	//新手
	"money":0,				//平台币
	"power":0,				//游戏币
	"bonus":0,				//奖励币

	"chanllenge":100*1000,					//挑战英雄档位
	"betTotal":[0,0,0,0,0,0],				//所有投注
	"betMine":[0,0,0,0,0,0],				//本人投注
	"betLast":[0,0,0,0,0,0],				//本人上一轮投注
	"betLevel":100,						//用户投注档位
	"betHistory":[],						//投注历史记录
	"betAuto":false,						//自动投注

	"gUserInfo":"gUserInfo"
};

//庄家信息
var gBankerInfo = {
	"uid":"",
	"nick":"",
	"icon":"",
	"level":0,
	"round":0,	//剩余场次
	"applys":[],//申请
	"power":0
};