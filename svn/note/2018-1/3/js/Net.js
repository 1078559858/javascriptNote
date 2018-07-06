/**
 * net state.
 */
function Net() {
	Phaser.State.call(this);
	// TODO: generated method.
}

var gNet = {};
gNet.net = null;

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Net.prototype = proto;
Net.prototype.constructor = Net;

Net.prototype.preload = function() {
};

Net.prototype.create = function() {
};

Net.prototype.update = function() {
};

Net.prototype.onData = function(fStr) {
	// GlobalUtils.MessageLog("get ondata  package: " + JSON.stringify(fStr));
	if (fStr.c != 10005 && fStr.c != 0) {
		// GlobalUtils.MessageLog("get package: " + JSON.stringify(fStr));
	} else if (fStr.c > 0) {
		// game.racing.gUtil.MessageLog("get package: " + JSON.stringify(fStr));
	}

	switch (fStr.c) {
		case -1:
			gGame.gameScene && gGame.gameScene.fDisConnectLayer.appearDisconnect("socket接收错误信息，" +
				"请重新连接！");
			break;
	case 10001:
		gGame.state.states.Net.recev10001(fStr);
		break;
	case 10002:
		gGame.state.states.Net.recev10002(fStr);
		break;
	case 20001:
		gGame.state.states.Net.recev20001(fStr);
		break;
	case 20002:
		gGame.state.states.Net.recev20002(fStr);
		break;
	case 20003:
		gGame.state.states.Net.recev20003(fStr);
		break;
	case 30001:
		gGame.state.states.Net.recev30001(fStr);
		break;
	default:
		gGame.state.states.Net.recevOther(fStr);
		break;
	}
};

Net.prototype.createNet = function() {
	$.get(GlobalTemp.getURL, function (result) {
		result = JSON.parse(result);
		var h5host = result.h5_host;
		var h5Port = result.h5_port;
		gGameConf.url = "ws://" + h5host + ":" + h5Port;

		try{
			var ws = new WebSocket(gGameConf.url);
			gNet.net = ObjectWebSocket.createNew(ws, gGame.state.states.Net.onData);
		}catch (error){
			gGame.preloadScene && gGame.preloadScene.appearDisconnect("连接服务器失败！!");
		}

	}).error(function () {
		gGame.preloadScene && gGame.preloadScene.appearDisconnect("连接服务器失败！");
	});
};
// 客户端请求游戏，请求进入场次
Net.prototype.make1002 = function() {
	var vObj = {};
	vObj.c = 1002;
	
	// if(Phaser.Device.windows){
	// 	vObj.channel = "lz";
	// 	vObj.platform = "pc";
	// }else if(Phaser.Device.iOS){
	// 	vObj.channel = "lz";
	// 	vObj.platform = "ios";
	// }else if(Phaser.Device.android){
	// 	vObj.channel = "lz";
	// 	vObj.platform = "android";
	// }else{
	// 	vObj.channel = "lz";
	// 	vObj.platform = "pc";
	// }

	gNet.net.sendObject(vObj);
};
// 客户端请求更新游戏状态
Net.prototype.make1003 = function() {
	var vObj = {};
	vObj.c = 1003;

	gNet.net.sendObject(vObj);
};

// 客户端请求坐下
Net.prototype.make1010 = function(idx) {
	var obj = {};
	obj.c = 1010;
	obj.idx = idx;

	gNet.net.sendObject(obj);
};

// 客户端请求坐庄
Net.prototype.make1011 = function() {
	var obj = {};
	obj.c = 1011;
	obj.money = gRoomInfo.chanllenge;

	gNet.net.sendObject(obj);
};

// 客户端请求坐庄
Net.prototype.make1012 = function() {
	var obj = {};
	obj.c = 1012;

	gNet.net.sendObject(obj);
};

// 客户端请求兑换平台币到游戏币
Net.prototype.make1101 = function(fMoney) {
	var vObj = {};
	vObj.c = 1101;
	vObj.money = fMoney;

	gNet.net.sendObject(vObj);
};
// 客户端请求兑换游戏币到平台币
Net.prototype.make1102 = function(fPower) {
	var vObj = {};
	vObj.c = 1102;
	vObj.power = fPower;

	gNet.net.sendObject(vObj);
};
// 客户端请求查询资产
Net.prototype.make1103 = function() {
	var vObj = {};
	vObj.c = 1103;

	gNet.net.sendObject(vObj);
};

// 客户端请求排名
Net.prototype.make1301 = function() {
	var vObj = {};
	vObj.c = 1301;

	gNet.net.sendObject(vObj);
};

// 客户端请求聊天
Net.prototype.make1401 = function(mess) {
	var vObj = {};
	vObj.c = 1401;
	vObj.mess = String(mess);

	gNet.net.sendObject(vObj);
};

//玩家投注
Net.prototype.make2001 = function (who, count) {
	var obj = {};
	obj.c = 2001;
	obj.who = Number(who);
	obj.count = Number(count);

	gNet.net.sendObject(obj);
};

//玩家请求状态
Net.prototype.make2002 = function () {
	var obj = {};
	obj.c = 2002;
	gNet.net.sendObject(obj);
};

Net.prototype.recev10001 = function(fObj) {
	gUserInfo.newbie = fObj.newbie;
	gUserInfo.nick = String(fObj.nick);
	gUserInfo.uid = String(fObj.uid);
	gUserInfo.url = String(fObj.icon);
	gUserInfo.result = fObj.result;

	if(!fObj.err){
		gGame.state.states.Preload.loginGame();
	}else{
		gGame.preloadScene.appearDisconnect(fObj.err);
	}

	this.make1002();
};

Net.prototype.recev10002 = function(fObj) {
	gUserInfo.power = Number(fObj.power) || 0;
	gUserInfo.money = Number(fObj.money) || 0;
	gUserInfo.bonus = Number(fObj.bonus) || 0;

	gGame.gameScene && gGame.gameScene.fPlayerPrefab.updateMess();
};
Net.prototype.recev10008 = function(fObj) {
	if (gUserInfo.uid == fObj.uid) {
		gUserInfo.power = fObj.power;
		gUserInfo.money = fObj.money;
		gGame.gameScene && gGame.gameScene.updateMyPower();
	}

	for(var i = 0; i < gRoomInfo.seats.length; i++){
		if(gRoomInfo.seats[i].uid == fObj.uid){
			gRoomInfo.seats[i].power = fObj.power;
			gRoomInfo.seats[i].money = fObj.money;
			gGame.gameScene && gGame.gameScene.playerSitdown(i);
		}
	}
};

Net.prototype.recev10006 = function(fObj) {
	if(fObj.mess){
		gGame.preloadScene && gGame.preloadScene.limitLogin(fObj.mess);
	}
};

Net.prototype.recev10011 = function(fObj) {
	gGame.gameScene && gGame.gameScene.updateBanker(fObj);
};

Net.prototype.recev10012 = function(fObj) {
	gGame.gameScene && gGame.gameScene.fChallengePrefab.appearChanllengeOver(fObj.power);
};

Net.prototype.recev10115 = function (fObj) {
	gBankerInfo.principal = fObj.power;
};

Net.prototype.recev11001 = function(fObj) {
	gRoomInfo.remain = fObj.remain;
	gRoomInfo.state = fObj.state;

	if(fObj.state === gRoomConf.idle){
		gGame.gameScene && gGame.gameScene.updateIdleState();
	}else if(fObj.state === gRoomConf.bet){
		gGame.gameScene && gGame.gameScene.updateBetState();
	}else if(fObj.state === gRoomConf.run){
		gGame.gameScene && gGame.gameScene.updateRunState();
	}else{
		gGame.gameScene && gGame.gameScene.updateOverState();
	}
};

Net.prototype.recev11002 = function(fObj) {
	if(!gGame.gameScene){
		gRoomInfo.initObj.seats = fObj;
	}
	gGame.gameScene && gGame.gameScene.updateSeatsAndStands(fObj);
};

Net.prototype.recev14559 = function (fObj) {
	gGame.limitChatLayer && gGame.limitChatLayer.SetText(fObj.message, fObj.remain);
};

Net.prototype.recev15001 = function(fObj) {
	if(!fObj.r){
		if(fObj.uid === gUserInfo.uid){
			gGame.gameScene && gGame.gameScene.addLimitText(fObj.who, fObj.mess);
		}

		return;
	}

	gGame.gameScene && gGame.gameScene.playerBetResult(fObj.uid, fObj.who, fObj.power);
};

Net.prototype.recev15002 = function(fObj) {
	gGame.gameScene && gGame.gameScene.updateBonusResult(fObj.zhuang, fObj.ren, fObj.shen, fObj.chong);
};

// Net.prototype.recev15003 = function (fObj) {
//
// if(gGame.state.current == "Level" && gGame.overScene){
// var vBet = gGame.gameScene.getUserAllBet();
//
// gGame.overScene.setTextMine(fObj.nick, fObj.power, vBet);
// }
// };

Net.prototype.recev15004 = function(fObj) {
	gGame.overScene && gGame.overScene.Appear(fObj.result);
	gGame.gameScene && gGame.gameScene.addBonusText(fObj.result);
};

Net.prototype.recev15005 = function(fObj) {
	gRoomInfo.historyResult = fObj.result.reverse();
	gGame.gameScene && gGame.gameScene.updateHistoryLayer();
};

Net.prototype.recev15011 = function(fObj) {
	gGame.gameScene && gGame.gameScene.updateBankerRemain(fObj.remain);
};

Net.prototype.recev16001 = function(fObj) {
	if (gGame.state.current == "Level" && gGame.rankScene) {
		gGame.rankScene.setTextAll(fObj.result);
	}
};

Net.prototype.recev20001 = function(fObj) {
	gGame.gameScene && gGame.gameScene.fBetChoicePrefab.playerBetResult(fObj);
};

Net.prototype.recev20002 = function(fObj) {
	gRoomInfo.gameNum = fObj.count || 1;
	gRoomInfo.remain = fObj.remain || 0;
	gRoomInfo.state = fObj.state || "idle";
	gRoomInfo.duration = fObj.duration || 0;

	gUserInfo.betHistory = fObj.bettingHistory || {};

	if(fObj.bettingMe) {
		gUserInfo.betMine = [0,0,0,0,0,0];
		for(var key in fObj.bettingMe){
			gUserInfo.betMine[key] = fObj.bettingMe[key];
		}
	}

	if(fObj.bettingAll) {
		gUserInfo.betTotal = [0,0,0,0,0,0];
		for(var key in fObj.bettingAll){
			gUserInfo.betTotal[key] = fObj.bettingAll[key];
		}
	}

	if(fObj.price){
		gRoomInfo.betPrice = [0,0,0,0,0,0];
		for(var key in fObj.price){
			gRoomInfo.betPrice[key] = fObj.price[key];
		}
		gGame.gameScene && gGame.gameScene.fBetChoicePrefab.updateBonusTimesText();
	}

	if(fObj.gameInfo){
		gRoomInfo.leftTeam = {"nick":fObj.gameInfo.mainTeam.name,"score":fObj.gameInfo.mainPoint};
		gRoomInfo.rightTeam = {"nick":fObj.gameInfo.secondTeam.name,"score":fObj.gameInfo.secondPoint};
		gRoomInfo.leftTeam.members = fObj.gameInfo.mainTeam.members;
		gRoomInfo.rightTeam.members = fObj.gameInfo.secondTeam.members;
		gRoomInfo.membersRace = fObj.gameInfo.membersRace;
	}

	gGame.gameScene && gGame.gameScene.updateGameState();
	gGame.gameScene && gGame.gameScene.fBetChoicePrefab.updateBetMineAndBetTotalText();
	gGame.gameScene && gGame.gameScene.fAllFootballers.initAllFootballers(gRoomInfo.leftTeam.members,
		gRoomInfo.rightTeam.members,gRoomInfo.membersRace);
};

Net.prototype.recev20003 = function (obj) {
	gRoomInfo.bonusResult = obj.result;

	gGame.gameScene && gGame.gameScene.fBetChoicePrefab.appearWin(obj.result);
};

Net.prototype.recev30001 = function(fObj) {

	if(fObj.d === 2){
		gGame.gameScene && gGame.gameScene.fAllFootballers.setFootballerPosByID(fObj.id, fObj.x, fObj.y);
	}
};

Net.prototype.recevOther = function(fObj) {
	//GlobalUtils.MessageLog(JSON.stringify(fObj));
};

