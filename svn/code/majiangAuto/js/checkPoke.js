//判断牌的类型
//1,2,3,4 53 54

//总数是2018
var getPokeDot = function (arr) {
	var num = 0;
	for(var i = 0; i < arr.length; i++){
		num += arr[i];

		if(arr[i]%4 <= 2){
			num += 13;
		}else if(arr[i] == 53){
			num += 13;
		} else if(arr[i] == 54){
			num += 26;
		}
	}

	return num;
};

var makeBoss = function (arr) {

};

//test
var arr = [];
for(var i = 1; i < 55; i++){
	arr.push(i);
}

console.log(getPokeDot(arr));
