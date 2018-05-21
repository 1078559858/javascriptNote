var foo = {
	"value":13,
	"say":function () {
		console.log( this.value);
	}
}

var temp = {
	"value":15,
	"say":foo.say
}

var temySay = foo.say;

foo.say(); //13
temp.say(); //15
temySay(); //undefined

//javascript中this关键字所指代的上下文，取决于函数是怎样被调用的，
//而不是怎样被定义的