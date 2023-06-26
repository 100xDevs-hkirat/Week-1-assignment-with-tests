// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ``` // After the program runs, the output should be
// ```
// hello world my name is raman
// ```;

const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./file.txt");

const cleaner = (content) => {
  const words = content.split(" ");
  const eligibleWords = [];
  for (let i in words) {
    if (words[i].length) {
      eligibleWords.push(words[i]);
    }
  }
  console.log(eligibleWords.join(" "));
  fs.writeFileSync(filePath, eligibleWords.join(" "));
};

fs.readFile(filePath, "utf8", (err, content) => cleaner(content));
