/**
 * net state.
 */
var gVideoMusicPath = "./assets/audio/";
var gVideoMusic ={
	bg:gVideoMusicPath + "bg.mp3",       //背景音乐
	bet:gVideoMusicPath + "bet.mp3",     //投注声音
	btn:gVideoMusicPath + "btn.mp3",     //按钮声音
	daojishi:gVideoMusicPath + "daojishi.mp3",  //倒计时
	dianshu:gVideoMusicPath + "dianshu.mp3",    //点数
	fanpai:gVideoMusicPath + "fanpai.mp3",     	//翻牌
	shapei:gVideoMusicPath + "shapei.mp3",      //通杀通赔
	ying:gVideoMusicPath + "ying.mp3"     		//赢
};

function Video() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Video.prototype = proto;
Video.prototype.constructor = Video;

var gVideo = {};
gVideo.isPlay = false;
gVideo.isDecode = false;
gVideo.volum = 1;

gVideo.music = {};
gVideo.music.btn = null;
gVideo.music.bg = null;
gVideo.music.bet = null;
gVideo.music.daojishi = null;
gVideo.music.dianshu = null;
gVideo.music.fanpai = null;
gVideo.music.shapei = null;
gVideo.music.ying = null;

Video.prototype.preload = function() {
};

Video.prototype.create = function() {
};

Video.prototype.update = function() {
};

Video.prototype.loadVideo = function () {
    //这个可以优化一下，取MP3和ogg两种格式
    for(var vMusicName in gVideoMusic){
        this.game.load.audio(vMusicName, gVideoMusic[vMusicName]);
    }
};

Video.prototype.initVideo = function () {
    gVideo.music.bg = gGame.add.audio("bg", 1, true);

    gVideo.music.btn = gGame.add.audio("btn", 1, false);
    gVideo.music.bet = gGame.add.audio("bet", 1, false);

    gVideo.music.daojishi = gGame.add.audio("daojishi", 1, false);
    gVideo.music.dianshu = gGame.add.audio("dianshu", 1, false);
    gVideo.music.fanpai = gGame.add.audio("fanpai", 1, false);

    gVideo.music.shapei = gGame.add.audio("shapei", 1, false);
    gVideo.music.ying = gGame.add.audio("ying", 1, false);

    gGame.sound.setDecodedCallback([gVideo.music.bg, gVideo.music.btn], this.videoDecode, this);
};

Video.prototype.videoDecode = function () {
    gVideo.isDecode = true;

    gGame.state.states.Video.playBg();
};

Video.prototype.playBtn = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.btn.allowMultiple = false;
        gVideo.music.btn.play();
    }
};

Video.prototype.playDaojishi = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.daojishi.allowMultiple = true;
        gVideo.music.daojishi.play();
    }
};

Video.prototype.playDianshu = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.dianshu.allowMultiple = false;
        gVideo.music.dianshu.play();
    }
};

Video.prototype.playFanpai = function () {
	if(gVideo.isPlay && gVideo.isDecode){
		gVideo.music.fanpai.allowMultiple = false;
		gVideo.music.fanpai.play();
	}
};

Video.prototype.playShapei = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.shapei.allowMultiple = false;
        gVideo.music.shapei.play();
    }
};

Video.prototype.playYing = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.ying.allowMultiple = false;
        gVideo.music.ying.play();
    }
};

Video.prototype.playBet = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.bet.allowMultiple = false;
        gVideo.music.bet.play();
    }
};

Video.prototype.playBg = function () {
    if(gVideo.isPlay && gVideo.isDecode){
        gVideo.music.bg.allowMultiple = false;
        gVideo.music.bg.play();
    }
};

Video.prototype.on_off = function () {
    if(gVideo.isPlay){
		gVideo.isPlay = false;
        gGame.sound.pauseAll();
    }else{
        gVideo.isPlay = true;
        gVideo.music.bg.resume();
    }

    return gVideo.isPlay;
};

