const fs = require('fs');

function cleanFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath,'utf8', (error,data) => {
      if (error) {
        reject(error);
      } else {
        var contents = data.toString();
        if(contents!=null){
            const trimmedString = contents.replace(/\s+/g, ' ').trim();
            contents = trimmedString;
            fs.writeFile(filePath, contents, 'utf-8', (error)=>{
                if(error) {
                    console.log("Read Error");
                    reject(error);
                } else{
                    resolve(contents);
                }
            })
        }
      }
    });
  });
}

const filePath = 'R:/MERN Cohot Assignments/Week-1-assignment-with-tests/02-async-js/medium/data.txt';

cleanFile(filePath)
  .then((data) => {
    console.log('File Clean Successful');
    console.log(data);
  })
  .catch((error) => {
    console.error('An error occurred while Cleaning the file:', error);
  });
