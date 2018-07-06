/**
 * Created by wxy on 2016/5/3.
 */

var ByteCache =  {
    maxBufferLen:128*1024,
    gUtil:GlobalUtils,
    createNew:function  () {
        var myByteCache = {};

        myByteCache.m_Data = new Array(ByteCache.maxBufferLen);
        myByteCache.m_OffetStart = 0;
        myByteCache.m_DataLen = 0;
        myByteCache.m_Error = false;

        myByteCache.ReArray = function(lenNeed) {
            if (lenNeed+myByteCache.m_DataLen+myByteCache.m_OffetStart < myByteCache.m_Data.length) {
                return;
            }

            var dataNew = new Array(ByteCache.maxBufferLen);
            for(var i=0; i < myByteCache.m_DataLen; i++){
                dataNew[i] = myByteCache.m_Data[myByteCache.m_OffetStart++];
            }
           // myByteCache.m_Data.copy(dataNew,0,myByteCache.m_OffetStart,myByteCache.m_OffetStart+myByteCache.m_DataLen);
            myByteCache.m_Data = dataNew;
            myByteCache.m_OffetStart = 0;
        };

        myByteCache.Push = function(data) {
            try {
                if (data.length + myByteCache.m_DataLen > myByteCache.m_Data.length) {
                    GlobalUtils.MessageLog("ByteCache.prototype.Push:", data.length, myByteCache.m_DataLen, myByteCache.m_Data.length);
                    myByteCache.m_Error = true;
                    return;
                }

                myByteCache.ReArray(data.length);

                var idx = myByteCache.m_OffetStart + myByteCache.m_DataLen;
                for(var x=0; x < data.length; x++){
                    myByteCache.m_Data[idx++] = data[x];
                }
                //data.copy(myByteCache.m_Data, myByteCache.m_OffetStart + myByteCache.m_DataLen);
                myByteCache.m_DataLen += data.length;
            }
            catch (e) {
                GlobalUtils.MessageLog("ByteCache.prototype.Push Error:", e.message);
                myByteCache.m_Error = true;
            }
        };

        myByteCache.Pop = function() {
            if (myByteCache.m_DataLen < 4) {
                return null;
            }

            var popBuf = new ArrayBuffer(4);
            var popData = new DataView(popBuf);
            var popOff = myByteCache.m_OffetStart;
            for(var i=0; i < 4; i++){
                popData.setUint8(i, myByteCache.m_Data[popOff++]);
            }
            var iden = popData.getUint32(0);
            var len = iden & 0xffff;

            if (len+4 > myByteCache.length) {
                GlobalUtils.MessageLog("ByteCache.prototype.Pop len:",len,myByteCache.m_DataLen);
                myByteCache.m_Error = true;
            }

            if (myByteCache.m_DataLen < 4 + len) {
                return null;
            }

            var data = new Array(len);
            var idx = myByteCache.m_OffetStart+4;
            for(var x=0; x < len; x++){
                data[x] = myByteCache.m_Data[idx++];
            }
            //myByteCache.m_Data.copy(data,0,myByteCache.m_OffetStart+4,myByteCache.m_OffetStart+4+len);

            // 验证hash
            var hashCal = ByteCache.gUtil.CalculateHash(data) & 0x7fff;
            var hashGet = (iden >> 16) & 0x7fff;

            if (hashCal != hashGet) {
                GlobalUtils.MessageLog("ByteCache.prototype.Pop Hash:",hashCal,hashGet,len);
                myByteCache.m_Error = true;
                return null;
            }

            myByteCache.m_OffetStart += (len+4);
            myByteCache.m_DataLen -= (len+4);

            return data;
        };

        myByteCache.Clear = function() {
            myByteCache.m_OffetStart = 0;
            myByteCache.m_DataLen = 0;
        };

        myByteCache.GetError = function() {
            return myByteCache.m_Error;
        };

        return myByteCache;
    }
};