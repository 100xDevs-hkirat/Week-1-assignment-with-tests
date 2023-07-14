const fs = require("fs");

function readFileContents() {
	fs.readFile("abc.txt", "utf8", (err, data) => {
		if (err) {
			console.error(err);
		} else {
			console.log(data);
		}
	});
}

readFileContents();

let sum = 0;
for (var i = 0; i < 1000000; i++) {
	sum += i;
}

console.log(sum);
