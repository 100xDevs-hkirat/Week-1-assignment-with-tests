// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');
function callback(err, data) {
  if (err) {
    console.error(err);
  } else {
    const content = data.toString();
    console.log(content);
  }
}

fs.readFile('Week-1-assignment-with-tests/02-async-js/easy/file.txt', callback );

var sum = 0;
for (var i = 0; i < 1000000000; i++){
  sum += i;
}
console.log(sum)