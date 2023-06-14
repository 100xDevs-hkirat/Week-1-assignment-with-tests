const fs = require('fs');
const path = require('path');

function readCallback(error, data, filePath) {
  if (error) {
    console.error('Error reading file:', error);
  } else {
    const modifiedContent = data.replace(/\s+/g, ' ').trim();
    writeToFile(filePath, modifiedContent);
  }
}

function writeCallback(error) {
  if (error) {
    console.error('Error writing to file:', error);
  } else {
    console.log('File write successful!');
  }
}

function readFromFile(filePath) {
  const absolutePath = path.resolve(filePath);
  fs.readFile(absolutePath, 'utf8', (error, data) =>
    readCallback(error, data, absolutePath)
  );
}

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', writeCallback);
}

// Usage: Replace "fileName" with the name of your file in the same folder
// const fileName = '1-file-cleaner.md';
const fileName = '1-file-cleaner-test-file.txt';
const filePath = path.join(__dirname, fileName);

readFromFile(filePath);
