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

function fileCleaner(str) {
  var tempArr = str.split(" ");
  var finalString = '';
  
  for(let i=0; i<tempArr.length; i++){
    if(tempArr[i].length > 0) {

      if(finalString === '') {
        finalString = tempArr[i];
      } else {
        finalString = finalString + ' ' + tempArr[i];
      }
    }
  }

  return finalString;
}

function readFromFile(err, data) {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  var formattedStr = fileCleaner(data);
  fs.writeFile('a.txt', formattedStr, 'utf8', writeOnfile);
}

function writeOnfile(err) {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }

  console.log('Content written to the file successfully.');
}

fs.readFile('a.txt', 'utf8', readFromFile);
