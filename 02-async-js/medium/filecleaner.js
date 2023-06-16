const fs = require('fs');
const filePath = '02-async-js/easy/a.txt';
function readfile(err,data)
{
    let str="";
     str=data;
     let clean = [];
     let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      clean.push(words[i]);
    }
  }
  
  const content = clean.join(' ');

 function write(err,data)
 {
    console.log("writing to file successful");
 }
 fs.writeFile(filePath,content,'utf8',write);
}
str=fs.readFile(filePath,'utf8',readfile);

 