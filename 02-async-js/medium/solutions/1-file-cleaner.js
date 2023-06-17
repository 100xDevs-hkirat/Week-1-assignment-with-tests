const fs = require("fs");

function writeToFile(info) {
	fs.writeFile("../1-file-cleaner.md", info, function (err) {
		if (err) {
			console.log(err);
			return;
		}
		console.log("Sucesfully cleaned the file !!");
	});
}

fs.readFile("../1-file-cleaner.md", "UTF-8", function (err, data) {
	let infoList = [];
	let text = "";
	for (let i = 0; i < data.length; i++) {
		if (data[i] == " ") {
			if (text != "") {
				infoList.push(text);
			}
			text = "";
			continue;
		}
		text += data[i];
	}

	if (text != "") {
		infoList.push(text);
	}

	let info = infoList.join(" ");

	writeToFile(info);
});
