const fs = require("fs");

function cleanWhiteSpaces(err, content) {
  let removeSpaces = content.replace(/\s+/g, " ");
  fs.writeFile(
    "./02-async-js/medium/file.txt",
    removeSpaces,
    "utf8",
    function (error) {
      if (error) {
        console.error("Error writing file:", error);
      } else {
        console.log("File written successfully.");
      }
    }
  );
  console.log("writefile");
}

fs.readFile("./02-async-js/medium/file.txt", "utf8", cleanWhiteSpaces);

console.log("readfile hello");
