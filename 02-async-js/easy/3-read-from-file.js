// ## Reading the contents of a file

const { isUtf8 } = require("buffer");
const fs = require("fs");

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

function readFile(filename) {
  fs.readFile(filename, "Utf8", (err, data) => {
    if (err) {
      console.log("Error reading file", err);
    } else {
      console.log("File contents:", data);
      expensiveOperation();
    }
  });
}

function expensiveOperation() {
  let startTime = Date.now();
  let sum = 0;
  for (let index = 0; index < 10000000; index++) {
    sum += index;
  }
  let endTime = Date.now();
  console.log("Expensive operation takes:", endTime - startTime);
}

readFile("./sample.txt");
