const fs = require("fs");
fs.readFile("fileCleaner.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("invalid file");
    return;
  }
  let content=data.replaceAll(/\s+/g," ");
  writeFile(content);
});

function writeFile(content) {
  fs.writeFile("fileCleaner.txt", content, (err) => {
    if (err) {
      console.error("invalid file");
    }
  });
}
