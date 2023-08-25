const fs = require("fs");

fs.writeFile(
  "./02-async-js/easy/file.txt",
  "This is to be written",
  "utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("File Written");
  }
);
