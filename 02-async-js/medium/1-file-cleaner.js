/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```*/

const fs = require('fs');
var text;
fs.readFile("spaces-file.txt", "utf-8", (err,input) => {
  if (err){
    throw err;
  }
  text = input.toString();

  var arr = text.split(" ");

  var string = "";
  for (let i = 0; i < arr.length; i++){
    if (!(arr[i] == '')){
      string = string + " " + arr[i];
    }
  }
  output = string.trimLeft()

  fs.writeFile("spaces-file.txt", output, (err) => {
    if (err){
      throw err;
    }
    else{
      console.log("Sucess written");
    }
  })
})