const fs = require("fs");

fs.writeFile("writeFile.txt", "Hello open source !", function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log("completed writting to the file");
});
