var readline = require('readline');

var textProblem = 'What do you think of Node.js? ';
var textAnswer ='Thank you for your valuable feedback:';

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var question = function (strQuestion, strAnswer) {
	rl.question(strQuestion, function(answer) {
		// TODO: Log the answer in a database
		console.log( strAnswer,` ${answer}`);

		rl.close();
	});
}

console.log("asd");

var logic = function () {
	question(textProblem, textAnswer);
};

logic();

