const fs = require("fs");

function removeWhitespace(str) {
  // Replace all sequences of more than 1 whitespace with a single whitespace
  return str.replace(/\s{2,}/g, " ");
}

function main() {
  // Get the path to the file
  const filePath = "02-async-js/medium/fileCleaner.txt";

  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Remove all sequences of more than 1 whitespace from the file content
  const newFileContent = removeWhitespace(fileContent);

  // Write the new file content back to the file
  fs.writeFileSync(filePath, newFileContent, "utf8");
}

main();
