// File cleaner
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

function cleanFile(path) {
  return fs.readFile(path, "utf8", (err, data) => {
    const correctedStr = data.replaceAll(/\s+/g, " ").trim();
    fs.writeFile(path, correctedStr, (err) =>
      err ? console.error(err) : console.info("File written successfully!")
    );
  });
}

cleanFile("../test.txt");
