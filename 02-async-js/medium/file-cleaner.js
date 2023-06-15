const fs = require("fs");

const filePath = "./data.txt";

function fileCleaner() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    let content = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}
fileCleaner();
