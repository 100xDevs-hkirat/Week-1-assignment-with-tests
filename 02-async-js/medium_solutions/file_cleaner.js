/*

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

*/

var fs = require('fs'); 

function fileCleaner(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
        console.log('Error: ', err);
        } else {
            console.log(data);
        var newStr = data.replace(/\s+/g, ' ');
        console.log(newStr); 
        fs.writeFile(filePath, newStr, function(err) {
            if (err) {
            console.log('Error: ', err);
            }
        });
        }
    });
}

fileCleaner('./02-async-js/medium_solutions/text.txt');
