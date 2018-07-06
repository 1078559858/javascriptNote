var RC4Util =  {
    N_256:256,
	createNew:function () {
		var myRC4Util = {};

		var i = 0;
		myRC4Util.it = 0;
		myRC4Util.ji = 0;
		myRC4Util.m_seq = new ArrayBuffer(RC4Util.N_256);
		myRC4Util.m_teq = new ArrayBuffer(RC4Util.N_256);

		for (i=0;i<myRC4Util.m_seq.length;i++) {
			myRC4Util.m_seq[i] = 0;
		}

		for (i=0;i<myRC4Util.m_teq.length;i++) {
			myRC4Util.m_teq[i] = 0;
		}

		myRC4Util.InitializeKey = function(keyStr) {
			var i = 0;
			var j = 0;
			var t = 0;
			var strLen = 0;

			myRC4Util.it = 0;
			myRC4Util.jt = 0;

			var keyBuffer = new ArrayBuffer(keyStr.length);
			for (i=0, strLen=keyStr.length; i<strLen; i++) {
				keyBuffer[i] = keyStr.charCodeAt(i);
			}

			for (i=0; i<RC4Util.N_256; i++){
				myRC4Util.m_seq[i] = i;
				myRC4Util.m_teq[i] = keyBuffer[i % keyBuffer.byteLength];
			}

			for (i=0; i<RC4Util.N_256; i++){
				j= (j+myRC4Util.m_seq[i]+myRC4Util.m_teq[i]) % RC4Util.N_256;
				t = myRC4Util.m_seq[i];
				myRC4Util.m_seq[i] = myRC4Util.m_seq[j];
				myRC4Util.m_seq[j] = t;
			}
		};

		myRC4Util.RC4Crypt = function(data) {
			var i = myRC4Util.it;
			var j = myRC4Util.jt;
			var r = 0;
			var t = 0;

			var dasArrayBuffer = new ArrayBuffer(data.byteLength);
			var dasDateView = new DataView(dasArrayBuffer, 0);
			for(r=0; r<data.byteLength; r++){

				i = (i+1) % RC4Util.N_256;
				j = (j+myRC4Util.m_seq[i]) % RC4Util.N_256;
				t = myRC4Util.m_seq[i];
				myRC4Util.m_seq[i] = myRC4Util.m_seq[j];
				myRC4Util.m_seq[j] = t;
				t = (myRC4Util.m_seq[i] + myRC4Util.m_seq[j]) % RC4Util.N_256;
				dasDateView.setUint8(r, data.getUint8(r)^myRC4Util.m_seq[t]);
			}

			myRC4Util.it = i;
			myRC4Util.jt = j;

			return dasDateView;
		};

		myRC4Util.MyRC4Crypt = function(data) {
			var i = myRC4Util.it;
			var j = myRC4Util.jt;
			var r = 0;
			var t = 0;

			var dasArrayBuffer = new ArrayBuffer(data.length);
			var dasDateView = new DataView(dasArrayBuffer, 0);
			for(r=0; r<data.length; r++){
				i = (i+1) % RC4Util.N_256;
				j = (j+myRC4Util.m_seq[i]) % RC4Util.N_256;
				t = myRC4Util.m_seq[i];
				myRC4Util.m_seq[i] = myRC4Util.m_seq[j];
				myRC4Util.m_seq[j] = t;
				t = (myRC4Util.m_seq[i] + myRC4Util.m_seq[j]) % RC4Util.N_256;
				dasDateView.setUint8(r, data[r]^myRC4Util.m_seq[t]);
			}

			myRC4Util.it = i;
			myRC4Util.jt = j;

			return dasDateView;
		};

		myRC4Util.RC4EnCryptString = function(strData) {
			var writeUTF = function (str, isGetBytes, change16) {
				var back = [];
				var byteSize = 0;
				for (var i = 0; i < str.length; i++) {
					var code = str.charCodeAt(i);
					if (0x00 <= code && code <= 0x7f) {
						byteSize += 1;
						back.push(code);
					} else if (0x80 <= code && code <= 0x7ff) {
						byteSize += 2;
						back.push((192 | (31 & (code >> 6))));
						back.push((128 | (63 & code)))
					} else if ((0x800 <= code && code <= 0xd7ff)
						|| (0xe000 <= code && code <= 0xffff)) {
						byteSize += 3;
						back.push((224 | (15 & (code >> 12))));
						back.push((128 | (63 & (code >> 6))));
						back.push((128 | (63 & code)))
					}
				}
				for (i = 0; i < back.length; i++) {
					back[i] &= 0xff;
				}

				if(change16){
					for(var i = 0; i < back.length; i++){
						back[i] = back[i].toString(16);
					}
				}

				if (isGetBytes) {
					return back
				}
				if (byteSize <= 0xff) {
					return [0, byteSize].concat(back);
				} else {
					return [byteSize >> 8, byteSize & 0xff].concat(back);
				}
			}

			var arr = writeUTF(strData, true);
			var strBuffer = new ArrayBuffer(arr.length);
            var strDateView = new DataView(strBuffer, 0);
            for (var i=0;  i < arr.length; i++) {
				strDateView.setUint8(i, arr[i]);
            }

			return myRC4Util.RC4Crypt(strDateView);
		};

		myRC4Util.RC4DeCryptString = function(data) {
			var dataBuffer = myRC4Util.MyRC4Crypt(data);
			var arr = new Array(dataBuffer.byteLength);
			for(var i = 0; i < dataBuffer.byteLength; i++){
				arr[i] = dataBuffer.getUint8(i);
			}
			var myByteUTF = byteUTF8.createNew();
			var str = myByteUTF.ReadUTF(arr);
			return str;
		};

        return myRC4Util;
	}
};
