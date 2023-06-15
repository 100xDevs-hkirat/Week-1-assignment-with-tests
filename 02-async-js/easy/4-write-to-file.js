const fs = require("fs");

const text = "Completing this assignment";

fs.writeFile("4-write-to-file.md", text, (err) => {
	if (err) console.log("Error", err);
	else console.log("Success");
});
