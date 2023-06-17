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
function clean(data){
  let arr = data.split(" ");
  let answerArray = [];
  for( let i = 0; i< arr.length; i++){
    if(arr[i].length === 0){
      
    } else{
      answerArray.push(arr[i]);
    }
  }
  let answerString = answerArray.join(" ")
  console.log(answerString)
  return answerString;
}
function fileWritten(err){
  console.log("done")
}
function fileRead(err,data){
  if(err){
    console.error(err);  
    return;
  }
 let cleanData = clean(data);
  fs.writeFile("a.txt", cleanedData ,"utf8" ,fileWritten)

}

fs.readFile('a.txt','utf8', fileRead);