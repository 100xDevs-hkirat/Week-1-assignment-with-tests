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

const fs = require("fs");

function fileClean(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const cleanedData = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filePath, cleanedData, (err) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log("succefully cleaned");
      }
    });
  });
}

const cleaner = "cleaner.txt";

fileClean(cleaner);
