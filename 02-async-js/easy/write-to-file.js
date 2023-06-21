const fs = require('fs');

const data = 'Hello, world!';

fs.writeFile('/tmp/test', data, 'utf8', (error) => {
  if (error) {
    console.error('Error writing to file:', error);
    return;
  }
  console.log('Data written to file successfully.');
});

while(true){};
//Remove the while loop above if you want your data to be written into the file.