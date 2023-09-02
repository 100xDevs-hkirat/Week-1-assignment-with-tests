//get fs 
const fs = require('fs');
function fileIsRead(err, content) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(content);
  }
fs.readFile('a.txt','utf8',fileIsRead);