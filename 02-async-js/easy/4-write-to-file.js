const fs = require('fs');

// Data to write to the file
const dataToWrite = "This is the content that will be written to the file.";

// Specify the file path where you want to write the data
const filePath = 'example.txt';

// Use the fs.writeFile() function to write data to the file
fs.writeFile(filePath, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('Data has been written to the file.');
});
