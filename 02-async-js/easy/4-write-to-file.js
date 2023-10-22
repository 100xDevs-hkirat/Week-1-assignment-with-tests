// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
var fs = require("fs");
console.log("Going to write into existing file");

// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('file.txt', 'Simply Easy Learning!', function(err) {
   console.log("Data written successfully!");
   console.log("Let's read newly written data");

   // Read the newly written file and print all of its content on the console
   fs.readFile('file.txt', function (err, data) {
      console.log("Asynchronous read: " + data.toString());
   });
});