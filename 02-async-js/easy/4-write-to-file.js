const fs = require("node:fs");

fs.writeFile(
  "write.txt",
  "I am writing to this file using fs lib.",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    else console.log("File updated");
  }
);
