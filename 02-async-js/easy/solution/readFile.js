const fs = require("fs");

fs.readFile("1-counter.js", "UTF-8", function (error, data) {
	console.log(data);
});
