
const fs= require('fs');

const text="Hello World";

fs.writeFile('/Users/aeon/Web-Dev/Week-1-assignment-with-tests/02-async-js/easy/4-write-to-file.md',text,'utf8',(err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Data has been written to file.txt');
  });
