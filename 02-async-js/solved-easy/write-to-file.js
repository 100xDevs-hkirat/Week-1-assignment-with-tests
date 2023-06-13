const fs = require("fs");

const writeFile = (file, content, callback = customCallback) => {
  fs.writeFile(file, content, callback);
};

const customCallback = (error) => {
  if (error) {
    console.log("error", error);
    return;
  }
  console.log("file written successfully");
};
const testThisCode = () => {
  writeFile("sks.md", "###Assignemnt by sks");
};

// testThisCode();
module.exports = { writeFile }; //as utility function
