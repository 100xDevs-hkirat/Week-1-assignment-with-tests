// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const data = "I wrote this using fs.writeFile";
function writethis(err, data) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("written succesfully");
  }
}
fs.writeFile("a.txt", data, "utf-8", writethis);
