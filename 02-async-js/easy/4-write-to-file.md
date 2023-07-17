## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content = 'This is the content that will be written to the file. Thank you.';

function writeOnfile(err) {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }

  console.log('Content written to the file successfully.');
}

fs.writeFile('a.txt', content, 'utf8', writeOnfile);
