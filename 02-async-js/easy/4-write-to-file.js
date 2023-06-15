const fs = require('fs');

const filePath = './file.txt';
const content = 'This is the content that will be written to the file.';

fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File has been written successfully.');
});