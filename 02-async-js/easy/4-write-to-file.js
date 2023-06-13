const fs = require("fs");
const path = require("path");

writeFile = (filepath, data) => {
  fs.writeFile(path.resolve(filepath), data, { encoding: "utf8" }, (err) => {
    if (err) throw err;
  });
};

// writeFile("./testing.txt", "this is the test data");

module.exports = { writeFile };
