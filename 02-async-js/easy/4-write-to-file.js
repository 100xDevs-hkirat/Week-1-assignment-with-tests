// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
function callback(err) {
    if (err) {
      console.error(err);
    } else {
      console.log("content has been successfully written");
    }
  }

const content = 'Hi! This is my first written file using javsscript.';

fs.appendFile('Week-1-assignment-with-tests/02-async-js/easy/file.txt', content, callback)