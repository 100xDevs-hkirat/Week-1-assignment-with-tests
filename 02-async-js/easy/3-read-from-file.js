const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "1-counter.md");
fs.readFile(filePath, (err, data) => {
  console.log(data.toString());
});
