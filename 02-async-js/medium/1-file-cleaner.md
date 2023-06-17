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


const fs = require("fs");

 fs.readFile('a.txt', 'utf8', (err, data) => {
  if(err) {
    console.log(err);
    return;
  }
  let info = removeSpaces(data);
  fs.writeFile('a.txt', info, 'utf8', (err)=> {
  if(err) {
    console.log(err);
    return;
  }
  console.log("written succesfully");
}); 
});

function removeSpaces(data) {
  return data.replace(/\s+/g, '');
}