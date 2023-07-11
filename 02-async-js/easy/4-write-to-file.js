//  ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');

const data = 'Hello, World! File has been tampered!!';

// Write the data to a file
fs.writeFile('./easy/sample.txt', data, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data written to file successfully.');
  }
});