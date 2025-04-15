const fs = require('fs');

const filePath = 'easy/sample.txt';
const data = 'Hello, world!';

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully.');
  }
});

var sum = 0;
for (let i = 0; i < 100; i++) {
    sum = sum + i
}

console.log(sum)
