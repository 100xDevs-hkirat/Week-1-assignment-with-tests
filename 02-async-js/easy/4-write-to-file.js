const fs = require("fs");
let input = "new data added.....writing to test file";
input += "\n";
fs.appendFile(
  "D:/Practice courses/Harkirat full stack paid course assignments/Week-1-assignment-with-tests/02-async-js/easy/4-write-to-file.md",
  input,
  (err) => {
    if (err) throw err;
    else {
      console.log("The file is populated with new data defined in input");
    }
  }
);
