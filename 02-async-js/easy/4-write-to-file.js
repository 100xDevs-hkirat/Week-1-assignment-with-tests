const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/user/file.txt'; // Replace with the absolute path to your file

fs.writeFile(filePath,'HelloWorld', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("written successfully");
});
for (let i = 0; i < 1000000000000; i++) {
    for (let j = 0; j < 1000000000000; j++) {}
}