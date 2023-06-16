const fs = require("fs");

fs.readFile("1-file-cleaner.txt", "utf8", (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  const newStr = str.replace(/\s+/g, " ");
  console.log(newStr);
});