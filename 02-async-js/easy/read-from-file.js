const fs = require("fs");
const filePath = "./3-read-from-file.md";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Print the contents of the file
  console.log("File contents:", data);
});
let sum = 0;
for (i = 0; i < 100000000; i++) {
  sum += i;
}
console.log(sum);
