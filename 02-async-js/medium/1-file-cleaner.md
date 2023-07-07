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

function errorfn(err){
  if(err){
    console.log("There is some problem in writing the file");
  }
  else{
    console.log("File has been written");
  }
}

function writeToFile(data){
  fs.writeFile('a.txt',data,errorfn);
}

function removeSpace(err,data){
  if(err){
    console.log("There is some problem in reading the file");
  }
  else{
    data = data.replace(/\s+/g, ' ');
    console.log("Removed all the spaces");
    writeToFile(data);
  }
}

fs.readFile('a.txt','utf8',removeSpace);