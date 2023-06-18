let fs = require('fs');

fs.readFile('test.txt','utf-8',(err,data) => console.log(data));