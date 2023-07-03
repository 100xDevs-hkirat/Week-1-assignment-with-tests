const fs = require('fs');
let fileContent;
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fileContent=data;
  writeContent(fileContent)
  console.log(data);
});

//console.log(fileContent);
function writeContent(fileContent){
  fs.writeFile('file.txt',fileContent.replace(/\s+/g,' ').trim(), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("written successfully");
  });
}

