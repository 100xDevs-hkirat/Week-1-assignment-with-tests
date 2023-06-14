const fs = require('fs');
const path = require('path');

const readFileAndPrintContents = (filePath) => {
  fs.readFile(path.resolve(filePath), 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading file:', error);
    } else {
      console.log('File contents:');
      console.log(data);
    }
  });

  // call an expensive operation of sum
  // performSum();
};

// const performSum = () => {
//   // expensive operation of sum
//   let result = 0;
//   for (let i = 0; i < 10000000000; i++) {
//     result += i;
//   }

//   console.log('Result of the expensive operation:', result);
// };

const filePath = path.join(__dirname, '3-read-from-file.md');
readFileAndPrintContents(filePath);
