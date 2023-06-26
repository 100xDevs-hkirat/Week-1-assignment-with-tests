// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./file.txt");
fs.writeFile(filePath, "This is an edited content", (err) =>
  console.log(fs.readFileSync(filePath, "utf8"))
);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
