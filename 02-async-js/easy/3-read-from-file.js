const fs = require("fs");
const path = require("path");

readFile = (filepath) => {
  fs.readFile(path.resolve(filepath), { encoding: "utf8" }, (error, data) => {
    if (error) throw error;
    console.log(data);
  });

  /** 
  // expensive operation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log(sum); // this will be console logged before the data of the file 
  */
};

readFile("./1-counter.md");

module.exports = { readFile };
