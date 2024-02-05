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

const fs = require('fs');

function clean(data) {
    return data;
}

function fileWritten(err) {
    console.log("done");
}

function fileRead(err, data) {
    if(err) {
        console.log(err);
        return;
    }
    let cleanData = clean(data);
    fs.writeFile('/path/to/your/file', 'utf-8', fileWritten);
}

fs.readFile('a.txt', 'utf-8', fileRead);