/**
 * Created by Administrator on 2016/7/12.
 */

var byteUTF8 = {
    createNew: function () {
        var myByteUTF = {};
        myByteUTF.InitArr = function (array) {
            for (var i = 0; i < array.length; i++) {
                array[i] *= 1;
                if (array[i] < 0) {
                    array[i] += 256;
                }
                if (array[i] > 255) {
                    throw new Error('不合法字节流');
                }
            }
            return array;
        };

        myByteUTF.ReadUTF = function (array) {
            var UTF = "";
            var _arr = myByteUTF.InitArr(array);
            for (var i = 0; i < _arr.length; i++) {
                var one = _arr[i].toString(2);
                var v = one.match(/^1+?(?=0)/);
                if (v && one.length == 8) {
                    var bytesLength = v[0].length,
                        store = _arr[i].toString(2).slice(7 - bytesLength);
                    for (var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    UTF += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    UTF += String.fromCharCode(_arr[i]);
                }

            }
            return UTF;
        };
        return myByteUTF;
    }
};