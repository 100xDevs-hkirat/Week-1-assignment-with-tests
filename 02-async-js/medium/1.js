const fs = require("fs");

fs.readFile("02-async-js/medium/1-test.txt", "utf8", (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  const newStr = str.replace(/\s+/g, " ");
  console.log(newStr);
});
