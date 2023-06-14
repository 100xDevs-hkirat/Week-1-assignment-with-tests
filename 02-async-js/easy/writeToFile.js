const fs = require('fs');

function writeFile(filePath,writeData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, writeData, 'utf8', (error) => {
      if (error) {
        reject(error);
      } else {
        fs.readFile(filePath, 'utf-8', (error,data)=>{
            if(error) {
                console.log("Read Error");
            } else {
                console.log(data.toString());
            }
        })
        resolve();
      }
    });
  });
}

const filePath = 'R:/MERN Cohot Assignments/Week-1-assignment-with-tests/02-async-js/easy/data.txt';
const writeData = "Data after Write";

writeFile(filePath,writeData)
  .then(() => {
    console.log('File Write Successful');
  })
  .catch((error) => {
    console.error('An error occurred while writing the file:', error);
  });
