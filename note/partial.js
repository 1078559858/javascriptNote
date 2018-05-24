//偏函数 partial function
// 参考地址：https://blog.csdn.net/neweastsun/article/details/75947785

//创造一些函数，让现有的一些参数值固定
//可以创建变体函数：send(from, to, text); sendTo(to, text);
/*
function mul(a, b) {
	return a*b;
}

var double = mul.bind(null, 2);
console.log(double(3));//6
console.log(double(10));//20;
*/


//没有上下文的偏函数
/*
function partial(func, argFirst) {
	return function(arg1, arg2){
		return func.call(this, argFirst, arg1, arg2);
	}
}

var user = {
	"nick":"liwei",
	"say":function (time, word) {
		console.log(time + " " + word);
	}
};

user.sayNow = partial(user.say, "10:00");
user.sayNow("helloworld!");
*/
/*
研究：es6语法以及loadash库：

所以使用spread运算符很容易实现，是吗？
loadash库也提供了—.partial实现。
*/

//柯里化  currying
//转换调用函数：func(a, b, c) ===> func(a)(b)(c)

/*test currying*/
/*
function sum(a, b) {
	return a + b;
}

function curry(func) {
	return function (a) {
		return function (b) {
			return func(a, b);
		}
	}
}

var carriedSum = curry(sum);
console.log(carriedSum(2)(3));
*/





