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
const fs=require('fs')
function FileWritten(err){
    if(err) throw err;
    console.log("Extra Spaces Have Been Removed")
}
function FileRead(err,data){
    data=data.trim()
    if(err) throw err
    let arr=data.split(" ")
    let str=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]!=""){
            str+=" ";
            str+=arr[i]
        }
    }
    fs.writeFile('sample.txt',str,FileWritten);

}
fs.readFile('sample.txt','utf-8',FileRead);
