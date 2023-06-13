const fs = require("fs");
const path = require("path");

readFile = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filepath), { encoding: "utf8" }, (error, data) => {
      if (error) throw error;
      resolve(data);
    });
  });
};

writeFile = (filepath, data) => {
  fs.writeFile(path.resolve(filepath), data, { encoding: "utf8" }, (err) => {
    if (err) throw err;
  });
};

const cleanit = (filepath) => {
  readFile(filepath).then((data) => {
    let filteredData = "";

    for (let i = 0; i < data.length; i++) {
      if (i > 1) {
        if (data[i] == " " && data[i - 1] == " ") {
          continue;
        } else {
          filteredData += data[i];
        }
      } else {
        filteredData += data[i];
      }
    }
    writeFile("./newfile.txt", filteredData); // make a new file named newfile.txt and put cleaned data inside it.
  });
};

cleanit("./testfile.txt");

module.exports = { cleanit };
