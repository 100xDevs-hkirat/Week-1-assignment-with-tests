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



let fs = require("fs");
let filePath = "Week-1-assignment-with-tests/02-async-js/easy/test.txt"

fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
       return console.error(err);
    }
    
    let removeSpace = data.replace(/\s+(\S+)\s+/g, ' $1 ').trim();

    fs.writeFile(filePath, removeSpace , "utf8", function(err) {
        if (err) {
           return console.error(err);
        }
        console.log("File written successfully");
     });
 });
