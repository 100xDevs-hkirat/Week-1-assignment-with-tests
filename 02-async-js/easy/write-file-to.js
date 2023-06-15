const fs = require("fs");

const filePath = "./3-read-from-file.md";
const filePathW = "./3-read-from-file1.md";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  fs.writeFile(filePathW, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }

    console.log("File has been written successfully.");
  });
});
