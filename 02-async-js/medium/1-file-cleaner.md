## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require("fs");

function clean(data) {
let arr = data.split(" ");

var ans = [];
for (var i = 0; i < arr.length; i++) {
if (arr[i] == "") {
continue;
} else {
ans.push(arr[i]);
}
}
var ansString = ans.join(" ");
return ansString;
}

function fileWritten(err) {
console.log("done");
}
function fileRead(err, data) {
if (err) {
console.log(err);
return;
}

let cleanedData = clean(data);
fs.writeFile("writeHere.txt", cleanedData, "utf8", fileWritten);
}

fs.readFile("writeHere.txt", "utf8", fileRead);
