/*

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

*/

const fs = require('fs');


function removeExtraSpaces(contents) {
  let trimmedData = contents.trim();
  let dataWithoutExtraSpaces = '';
  let spaces = 0;

  for (let index = 0; index < trimmedData.length; index++) {
    if (trimmedData[index] === ' ' && spaces === 0) {
      spaces += 1;
      dataWithoutExtraSpaces += ' ';
    } else if (trimmedData[index] === ' ' && spaces > 0) {
      spaces += 1;
      continue;
    } else if (trimmedData[index] !== ' ') {
      spaces = 0;
      dataWithoutExtraSpaces += trimmedData[index];
    }
  }

  return dataWithoutExtraSpaces;
}

function writeDataToFile(data) {
  fs.writeFile('extra_spaces_removed.txt', data, (err) => {
    if (err) {
      console.error('Error writing file: ', err);
    } else {
      console.log('File is written successfully!');
    }
  });
}

fs.readFile('file_extra_spaces.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  let fileData = removeExtraSpaces(data);
  writeDataToFile(fileData);
});
