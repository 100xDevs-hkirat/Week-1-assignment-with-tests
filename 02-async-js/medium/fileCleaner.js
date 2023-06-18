const fs = require("fs");

const fnCleanFile = (data) => {
  const cleanFile = data.replace(/\s\s+/g, " ").trim();
  console.log(cleanFile);
  return cleanFile;
};

function writeFile(file) {
  fs.writeFile("a.txt", file, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function readFileWrite(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    const file = fnCleanFile(data);
    writeFile;
  });
}

function fileCleaner(filePath) {
  readFileWrite(filePath);
}

fileCleaner("a.txt");
