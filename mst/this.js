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
