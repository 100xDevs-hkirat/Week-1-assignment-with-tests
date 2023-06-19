/*

## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

*/

const fs = require('fs');

let endTime = Date.now() + 10000;
let data = "Hello World!";

fs.writeFile('new_file.txt', data, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File is written successfully!');
  }
});

while (Date.now() < endTime) {
}

console.log('Finished expensive operation.');
