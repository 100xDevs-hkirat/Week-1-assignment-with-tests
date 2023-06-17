const fs = require('fs');
var filePath = 'medium/sample.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const str = data
  const trimmedStr = str.replace(/\s+/g, ' ').trim();
  
  fs.writeFile(filePath, trimmedStr, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File over-written successfully.');
    }
  });

  
});