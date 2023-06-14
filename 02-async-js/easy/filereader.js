const fs = require('fs');

// Specify the path to the file you want to read
const filePath = 'file.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading the file:', error);
      return;
    }
   console.log('File contents:');
   console.log(data);
});
ExpensiveOperation();
function ExpensiveOperation() {
  for (let i = 0; i < 10000000000; i++) {
  }
  console.log('Expensive operation completed.');
}
