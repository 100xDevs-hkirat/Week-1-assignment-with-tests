/*

## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

// Function to write contents to a file
function writeFileContents(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf8", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Example usage
const filePath = "path/to/your/file.txt";
const fileContents = "Hello, world!";

writeFileContents(filePath, fileContents)
  .then(() => {
    console.log("File write operation completed successfully.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
