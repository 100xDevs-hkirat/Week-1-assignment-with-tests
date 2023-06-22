// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->

const fs = require("fs");
function cleaner(data) {
  var arr = data.split(" ");
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
    } else {
      answer.push(arr[i]);
    }
  }
  return answer.join(" ");
}
function success() {
  console.log("Removed the extra spaces and rewrote the message.");
}
function fileRead(err, data) {
  if (err) {
    console.error(err);
  }
  let clearData = cleaner(data);
  fs.writeFile("aa.txt", clearData, "utf-8", success);
}
fs.readFile("aa.txt", "utf-8", fileRead);
