const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

const filePath = 'R:/MERN Cohot Assignments/Week-1-assignment-with-tests/02-async-js/easy/1-counter.js';
readFile(filePath)
  .then((data) => {
    console.log('File contents:');
    console.log(data);
  })
  .catch((error) => {
    console.error('An error occurred while reading the file:', error);
  });
