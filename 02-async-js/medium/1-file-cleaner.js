/*Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman*/


const fs = require('fs');

fs.readFile('./messy-file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading this file!", err);
    return;
  }
  const updatedContent = data.replace(/\s+/g, ' ').trim();

  fs.writeFile('./messy-file.txt', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  fs.readFile('./messy-file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Updated file is :- \n\n", data);
  });

});