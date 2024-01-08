const fs = require('fs');
const path = require('path');

const data = "I AM A MAN WHO DRINKS TEA.";
const filePath = path.join(__dirname, 'write.txt');
fs.writeFile(filePath, data, "utf8" , function (err) {
  if (err) throw err;
  console.log("Wrote to the file successfully.");
}); 