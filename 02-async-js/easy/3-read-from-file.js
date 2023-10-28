const fs = require('fs');

// Specify the file path you want to read
const filePath = 'example.txt';

// Use the fs.readFile() function to read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // The file content is in the "data" variable
  console.log('File content:');
  console.log(data);
});

for(var num = 0; num<10000; num++) {
    console.log("hi")
}
