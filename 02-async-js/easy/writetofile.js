const fs = require('fs');
const filePath = '02-async-js/easy/a.txt';
const content = 'Hello world!';
 function write(err,data)
 {
    console.log("writing to file successful");
 }
 fs.writeFile(filePath,content,'utf8',write);