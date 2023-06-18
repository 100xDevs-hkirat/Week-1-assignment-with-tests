const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "/concerned_file.md"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.error("error: ", err);
      return;
    }

    let writeData = data;
    writeData = writeData.split(" ").filter((ele) => {
      return ele !== "";
    });
    writeData = writeData.join(" ");
    console.log("writeData =", writeData);

    fs.writeFile(
      path.join(__dirname, "concerned_file.md"),
      writeData,
      (err) => {
        if (err) throw err;
      }
    );
  }
);
