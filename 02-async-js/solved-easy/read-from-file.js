const fs = require("fs");

//used as a utility function for file-cleaner
//so i have used a variable to store the callback
const readFile = (file, callback = printFile) => {
  fs.readFile(file, "utf8", callback);
};
const printFile = (error, content) => {
  if (error) {
    console.log("error", error);
    return;
  }
  console.log(content);
};

const testThisCode = () => {
  // readFile("README.md", printFile);
};
// testThisCode();

module.exports = { readFile }; //as utility function
