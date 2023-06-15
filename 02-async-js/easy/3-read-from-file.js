/*

## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

*/
const fs = require("fs");

// Function to read the contents of a file
function readFileContents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Example usage
const filePath = "path/to/your/file.txt";

readFileContents(filePath)
  .then((data) => {
    console.log("File Contents:");
    console.log(data);

    // Example of an expensive operation
    console.log("Performing an expensive operation...");
    for (let i = 0; i < 1000000000; i++) {
      // Expensive computation
    }
    console.log("Expensive operation completed.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
