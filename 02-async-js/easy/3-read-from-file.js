const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/user/file.txt'; // Replace with the absolute path to your file

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
for (let i = 0; i < 1000000000000; i++) {
    for (let j = 0; j < 1000000000000; j++) {}
  }
