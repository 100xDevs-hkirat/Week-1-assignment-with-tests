const fs=require('fs')

fs.readFile("/Users/aeon/Web-Dev/Week-1-assignment-with-tests/02-async-js/easy/4-write-to-file.md",'utf8',(err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log(data);
  });