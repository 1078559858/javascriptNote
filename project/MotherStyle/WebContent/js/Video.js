/**
 * net state.
 */
function Video() {
	Phaser.State.call(this);
	// TODO: generated method.


	var videoMusicPath = "./assets/audio/";

	this.videoInfo = {};
	this.videoInfo.couldPlaySound = true;
	this.videoInfo.couldPlayMusic = true;
	this.videoInfo.volum = 1.0;
	this.videoInfo.data ={
		"bg":{
			"path":videoMusicPath + "bgm.mp3" ,      //背景音乐
			"loop":true,
			"video":null
		},
		"click":{
			"path":videoMusicPath + "tips.mp3",		//点击
			"loop":false,
			"video":null
		}
	};

}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Video.prototype = proto;
Video.prototype.constructor = Video;

Video.prototype.preload = function() {
	//这个可以优化一下，取MP3和ogg两种格式
	for(var name in this.videoInfo.data){
		this.game.load.audio(name, this.videoInfo.data[name].path);
	}
};

Video.prototype.create = function() {
	//this.initVideo();
	this.game.state.start("Preload");
};

Video.prototype.update = function() {

};

Video.prototype.initVideo = function () {
	var arr = [];

	for(var name in this.videoInfo.data){
		var data = this.videoInfo.data[name];
		data.video = gGame.add.audio(name, this.videoInfo.volum,data.loop);
		data.video.allowMultiple = false;

		arr.push(data.video);
	}

    gGame.sound.setDecodedCallback(arr, this.start, this);
};

Video.prototype.start = function () {
	this.videoInfo.data["bg"].video.play();

	if(!this.videoInfo.couldPlayMusic){
		this.videoInfo.data["bg"].video.pause();
	}

	this.game.state.start("Preload");
};

Video.prototype.playBg = function () {
	return;
	if(this.couldPlayMusic()){
		this.videoInfo.data["bg"].video.play();
	}
};

Video.prototype.playClick = function () {
	return;
	if(this.couldPlaySound()){
		this.videoInfo.data["click"].video.play();
	}
};

Video.prototype.on_off_Sound = function () {
	this.videoInfo.couldPlaySound = !this.videoInfo.couldPlaySound;
};

Video.prototype.on_off_Music = function () {
	if(this.videoInfo.couldPlayMusic){
		this.videoInfo.couldPlayMusic = false;
		this.videoInfo.data["bg"].video.pause();
	}else{
		this.videoInfo.couldPlayMusic = true;
		this.videoInfo.data["bg"].video.resume();
	}
};

Video.prototype.stopAllMusic = function () {
	this.videoInfo.data["bg"].video.pause();
};

Video.prototype.couldPlayMusic = function () {
	return this.videoInfo.couldPlayMusic;
};

Video.prototype.couldPlaySound = function () {
	return this.videoInfo.couldPlaySound;
};

