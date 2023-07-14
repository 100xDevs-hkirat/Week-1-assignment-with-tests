const fs = require("fs");

function writeToFile(filePath, content) {
	fs.writeFile("write.txt", "Hello Devanshu", "utf8", (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("Something Written");
		}
	});
}

writeToFile();

const someFunction = () => {
	let sum = 0;
	for (var i = 0; i < 10000000000; i++) {
		sum += i;
	}
	console.log(sum);
};

someFunction();
