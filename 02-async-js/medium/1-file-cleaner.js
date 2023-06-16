const fs = require("fs");

fs.readFile(
  "D:/Practice courses/Harkirat full stack paid course assignments/Week-1-assignment-with-tests/02-async-js/medium/1-file-cleaner-test.md",
  "utf-8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.appendFile(
      "D:/Practice courses/Harkirat full stack paid course assignments/Week-1-assignment-with-tests/02-async-js/medium/1-file-cleaner-test.md",
      "\r\n" + clean(data),
      (err) => {
        if (err) console.error(err);
        else console.log("Operation Successful");
      }
    );
  }
);

function clean(str) {
  return str.replace(/\s+/g, " ").trim();
}
