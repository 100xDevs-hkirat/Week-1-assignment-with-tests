// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');

function cleanFile(err, content) {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log("Data before cleaning:");
  console.log(content);
  
  content = content.toString();
  let updated = content.replace(/\s+/g," ");
  
  fs.writeFile("demo.txt", updated, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log("Data after cleaning:");
    console.log(updated);
  });
}

fs.readFile("demo.txt", "utf-8", cleanFile);
