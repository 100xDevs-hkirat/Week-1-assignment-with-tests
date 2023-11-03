<!-- ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` -->

var fs=require("fs");
fs.readFile("temp.txt", "utf-8", (err, data) => {
var data=data.replace(/\s+/g, ' ').trim();
console.log(data);
fs.writeFile("temp.txt", data, (err) => {
if (err) console.log(err);
console.log("Successfully Written to File.");
});
});
