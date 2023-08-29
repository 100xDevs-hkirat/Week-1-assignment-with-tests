// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const content = "My nam is Anthony Gonzalwis, me dunia me akela hu!";

function writeFile() {
  fs.writeFile("output.txt", content, "Utf-8", (err) => {
    if (err) {
      console.log("Oops! ", err);
    } else {
      console.log("Content written to file succesfully");
    }
  });
}

writeFile();
