const fs = require("fs");

const readAFileAndRemoveSpaces = () => {
	fs.readFile("abc.txt", "utf8", (err, data) => {
		if (err) {
			console.error("Error reading file", err);
			return;
		}
		const cleanContent = data.replace(/\s+/g, " ").trim();

		fs.writeFile("abc.txt", cleanContent, "utf8", (err) => {
			if (err) {
				console.error("Error writing file", err);
				return;
			}

			console.log("Removed spaces successfully.");
		});
	});
};

readAFileAndRemoveSpaces();
