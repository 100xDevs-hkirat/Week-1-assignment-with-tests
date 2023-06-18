const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, `/3-read-from-file.md`),
  "utf-8",
  (err, data) => {
    if (err) {
      console.error("error: ", err);
      return;
    }
    console.log(data);
  }
);

let counter = 0;

for (let i = 0; i < 10000000000; i++) {
  counter++;
}

console.log(counter);
