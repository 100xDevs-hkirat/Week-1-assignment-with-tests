## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
write = "this is new update to .txt file"
fs.writeFile("Week-1-assignment-with-tests/02-async-js/easy/test.txt", write , "utf8", function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File written successfully");
});
