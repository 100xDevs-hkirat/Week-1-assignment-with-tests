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

<!-- The file cleaner code is here -->

const fs = require('fs');

function clean(data) {
let cleanedData = data.replace(/\s+/g, ' ').trim();
return cleanedData;
}

function fileWritten(err) {
if (err) {
console.error(err);
return;
}
console.log("File is Written");
}

function fileRead(err, data) {
if (err) {
console.error(err);
return;
}
let cleanedData = clean(data);
fs.writeFile('./a.txt', cleanedData, 'utf8', fileWritten);
}

fs.readFile('./a.txt', 'utf8', fileRead);
