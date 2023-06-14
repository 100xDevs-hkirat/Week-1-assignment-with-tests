const fs = require('fs');
const path = require('path');

function writeToFile(filePath, content) {
  fs.writeFile(path.resolve(filePath), content, 'utf8', (error) => {
    if (error) {
      console.error('Error writing to file:', error);
    } else {
      console.log('File write successful!');
    }
  });
}

// uncomment following line of code to run this function and test.

// const filePath = path.join(__dirname, '4-write-to-file-test-text-file.txt');
// const fileContent =
//   'Hi, this is Masihullah. I am a frontend developer learning to be a fullstack mern developer.';

// writeToFile(filePath, fileContent);
