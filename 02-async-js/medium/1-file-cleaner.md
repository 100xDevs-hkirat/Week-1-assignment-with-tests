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

<!-- 

var fs = require("fs");

var filepath = "./testfile.txt";

fs.readFile(filepath, "utf8", (error, data) => {
  fs.writeFile(filepath, data.split(/\s+/).join(" "), "utf8", (_) => { });
});


 -->


