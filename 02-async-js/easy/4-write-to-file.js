const fs = require("fs");

fs.writeFile("4-write-to-file.txt", "Hello, World!", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});