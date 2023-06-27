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

### Solution
```js
const fs = require('fs');

function cleanFile() {
  fs.readFile('garbage.txt', (err, data) => {
    if (err) throw err;
    data = data.toString().replace(/[ ]+/g, ' ');
    // Alternatively you can write to a new file as shown below
    // fs.writeFile('cleaned.txt', data, (err) => {
    fs.writeFile('garbage.txt', data, (err) => {
      if (err) throw err;
      console.log("Cleaned File Successfully!!!");
    });
  });
}

cleanFile();
```