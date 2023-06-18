const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "/3-read-from-file.md"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.error("error: ", err);
      return;
    }

    const writeData = data;
    console.log("writeData =", writeData);

    fs.writeFile(path.join(__dirname, "writingcontent.md"), writeData, (err) => {
      if (err) throw err;
    });
  }
);
