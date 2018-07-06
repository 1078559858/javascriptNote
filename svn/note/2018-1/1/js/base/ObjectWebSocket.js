// var __extends = this.__extends || function (d, b) {
//         function __() { this.constructor = d; }
//         __.prototype = b.prototype;
//         d.prototype = new __();
//     };

var ObjectWebSocket = {
    //__extends(ObjectWebSocket, _super);
    //rc4:RC4Util.createNew(),
    gUtil:GlobalUtils,
    bcache:ByteCache.createNew(),
    rc4_key : "xcvr@2&^45654*&(&10112",
    createNew:function (socket, callback) {
       // var myObjWebSocket =  new EventEmitter();
        var myObjWebSocket = {};
        myObjWebSocket.callback = callback;
        //_super.call(this);
        //socket.setNoDelay(true);

        myObjWebSocket._open = true;
        myObjWebSocket._socket = socket;
        myObjWebSocket._rcache = ObjectWebSocket.bcache;
        myObjWebSocket._rc4EnCrypt =  RC4Util.createNew();
        myObjWebSocket._rc4DeCrypt = RC4Util.createNew();

        myObjWebSocket._rc4EnCrypt.InitializeKey(ObjectWebSocket.rc4_key);
        myObjWebSocket._rc4DeCrypt.InitializeKey(ObjectWebSocket.rc4_key);

//        var This = myObjWebSocket;

        myObjWebSocket._socket.onmessage =  function (evt) {
            if (!(evt.data instanceof Blob)) {
                myObjWebSocket.End();
                console.log("!flags.binary:"+evt.data);
            }

            if (!myObjWebSocket._open) {
                return;
            }

            var blob = evt.data;
            var reader = new FileReader();
            reader.onload = function (event) {
                if(event.target.readyState == FileReader.DONE){
                    var xx = event.target.result;
                    var buf = new DataView(xx);
                    var len = buf.byteLength;

                    var arr = new Array();
                    for(var i=0; i < len; i++){
                        arr.push(buf.getUint8(i));
                    }

                    myObjWebSocket.readBuffer(arr);
                    myObjWebSocket.decodeBuffer();
                }
            };
            reader.readAsArrayBuffer(blob);
        };

        myObjWebSocket._socket.onclose  = function () {
			var obj = {"c":-1};
			if(myObjWebSocket.callback){
				myObjWebSocket.callback(obj);
			}

            myObjWebSocket._open = false;
            myObjWebSocket._rc4EnCrypt.InitializeKey(ObjectWebSocket.rc4_key);
            myObjWebSocket._rc4DeCrypt.InitializeKey(ObjectWebSocket.rc4_key);
            myObjWebSocket._rcache.Clear();

            //myObjWebSocket._socket.emit("end");
            //myObjWebSocket._socket.onended();
        };

        myObjWebSocket._socket.onerror =  function () {
            myObjWebSocket._open = false;
            myObjWebSocket._rc4EnCrypt.InitializeKey(ObjectWebSocket.rc4_key);
            myObjWebSocket._rc4DeCrypt.InitializeKey(ObjectWebSocket.rc4_key);
            myObjWebSocket._rcache.Clear();
            //myObjWebSocket._socket.emit("end");
           // myObjWebSocket._socket.onended();
        };

        myObjWebSocket._socket.onopen  =  function () {
			var xx = Math.floor(Math.random()*10000);
			//var obj = {"c":1001, "user":xx.toString(), "pwd":"liwei"};
            //var obj = {"c":1001, "user":gUserInfo.user, "pwd":gUserInfo.pwd};
			var obj = {};
			obj.c = 1001;
			obj.usr = gUserInfo.user;
			obj.pwd = gUserInfo.pwd;
			obj.nick = gUserInfo.nick;
			obj.timestamp = Date.now().toString();

			if(Phaser.Device.windows){
				obj.platform = "pc";
				obj.channel = "lz";
			}else if(Phaser.Device.iOS){
				obj.platform = "ios";
				obj.channel = "lz";
			}else if(Phaser.Device.android){
				obj.platform = "android";
				obj.channel = "lz";
			}else{
				obj.platform = "pc";
				obj.channel = "lz";
			}

            myObjWebSocket.sendObject(obj);
        };

        myObjWebSocket.End = function () {
            if (!myObjWebSocket._open) {
                return;
            }

            myObjWebSocket._socket.close();
           // myObjWebSocket._socket.emit("end");
            //myObjWebSocket._socket.onended();
        };


        myObjWebSocket.sendObject = function (obj) {
            if (!myObjWebSocket._open) {
                GlobalUtils.MessageLog("send close!");
                return;
            }

            try {
                var str = JSON.stringify(obj);
                var dataBuffer = myObjWebSocket._rc4EnCrypt.RC4EnCryptString(str);
                var hash = ObjectWebSocket.gUtil.MyCalculateHash(dataBuffer) & 0x7fff;
                var iden = hash << 16 | dataBuffer.byteLength & 0xffff;
                var len32Buffer = new ArrayBuffer(4);
                var lengthBuffer = new DataView(len32Buffer);
                lengthBuffer.setUint32(0, iden);
                myObjWebSocket._socket.send(lengthBuffer);
                myObjWebSocket._socket.send(dataBuffer);
                GlobalUtils.MessageLog("Send Object:len=["+dataBuffer.byteLength+"] :"+str);
            }
            catch (e) {
                GlobalUtils.MessageLog("error on sendObject:"+e.message);
                myObjWebSocket.End();
            }
        };

        myObjWebSocket.readBuffer = function (data) {
            myObjWebSocket._rcache.Push(data);
        };

        myObjWebSocket.decodeBuffer = function () {
        	var data  = null;
            while (myObjWebSocket._open) {
                try {
                    data = myObjWebSocket._rcache.Pop();
                    if (myObjWebSocket._rcache.GetError()) {
                        GlobalUtils.MessageLog("decodeBuffer error when get cache");
                        myObjWebSocket.End();
                    }
                }
                catch (e) {
                     GlobalUtils.MessageLog("decodeBuffer error :"+e.message);
                    myObjWebSocket.End();
                }

                if (data == null) {
                    break;
                }

                myObjWebSocket.getPackage(data);
            }
        };

        myObjWebSocket.getPackage = function (data) {
			var strRead = myObjWebSocket._rc4DeCrypt.RC4DeCryptString(data);
			GlobalUtils.MessageLog("Get web Package:len=["+data.length+"] :"+strRead);
			//myObjWebSocket.emit("data", JSON.parse(strRead));
			myObjWebSocket.callback(JSON.parse(strRead));

			return;

            try
            {
                var strRead = myObjWebSocket._rc4DeCrypt.RC4DeCryptString(data);
               	GlobalUtils.MessageLog("Get web Package:len=["+data.length+"] :"+strRead);
               //myObjWebSocket.emit("data", JSON.parse(strRead));
				myObjWebSocket.callback(JSON.parse(strRead));
            }
            catch (e) {
                GlobalUtils.MessageLog("get error Package error :"+e.message);
                myObjWebSocket.End();
            }
        };

        return myObjWebSocket;
    }
};
