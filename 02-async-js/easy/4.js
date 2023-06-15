const fs = require("fs");

fs.writeFile("02-async-js/easy/test.txt", "Hello, World!", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
