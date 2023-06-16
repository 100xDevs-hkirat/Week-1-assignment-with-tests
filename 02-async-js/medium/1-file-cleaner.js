/**
 * ## File cleaner
 * Read a file, remove all the extra spaces and write it back to the same file.
 * 
 * For example, if the file input was
```
hello     world    my    name   is       raman
```
After the program runs, the output should be

```
hello world my name is raman
```
 */
const fs = require('fs');

/**
 * 
 * Splits the string using regex (space+) and then merges the string back
 */
function cleanupSpaces(str) {
    let cleanedStr = str.trim().split(/\s+/).join(" ");
    return cleanedStr;
}

function writeFileCallback(err) {
    if (err) {
        throw err;
    } else {
        console.log("File written successfully. check the contents");
    }
}

// callback for reading from file
let readStringContents = "";
function readFileCallback(err, contents) {
    if (err) {
        console.log(err);
        throw err;
    }
    readStringContents = cleanupSpaces(contents);

    // contents read and sanitized
    console.log(readStringContents);

    // write back to the file
    fs.writeFile("1.file.txt", readStringContents, writeFileCallback);
}

// read and sanitize the string and then write back to the file
fs.readFile("1.file.txt", "utf8", readFileCallback);