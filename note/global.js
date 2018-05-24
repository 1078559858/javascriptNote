// //partial functions  偏函数
// var GetDIYArray = function () {
// 	return Array.prototype.slice.call(arguments);
// };
//
// var preDefineArr = GetDIYArray.bind(null, 12);
// console.log(preDefineArr(1,2,3));		//[12,1,2,3]
//
//
// function Bloomer() {
// 	this.petalCount = Math.ceil(Math.random() * 12) + 1;
// }
//
// // 1秒后调用declare函数
// Bloomer.prototype.bloom = function() {
// 	setTimeout(this.declare, 1000);
// };
//
// Bloomer.prototype.declare = function() {
// 	console.log('我有 ' + this.petalCount + ' 朵花瓣!');
// };
//
// var obj = new Bloomer();
// obj.declare();
// obj.bloom();


var str = 'aaa';
var n = 2;
function auto(num){
	console.log(num);
}
setTimeout(auto, 100)
