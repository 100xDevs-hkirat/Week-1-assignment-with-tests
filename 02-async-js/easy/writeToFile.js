var fs = require("fs");

var writeToFile = (filename, content) => {
  fs.writeFile(filename, content, "utf8", (err) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("File written successfully.");
  });
};

writeToFile(".\\02-async-js\\easy\\write.txt", "Hello, world!");
