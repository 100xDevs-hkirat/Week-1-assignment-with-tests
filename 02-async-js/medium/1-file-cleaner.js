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
### code

function clean(data){
    var arr = data.split(' ');
    var ansArr = [];
    for(let  i =0 ; i< arr.length; i++){
        if(arr[i].lenght === 0){

        }
        else{
            ansArr.push(arr[i]);
        }
    }
    var ansString = ansArr.join(' ')'
    return ansString;
}
function fileWriten(err){
    console.log("done");
}

function fileRead(err, data){
    if (err){
        console.log(err);
        return;
    }
    let cleanedData = clean(data);
    fs.writeFile('test.txt', cleanedData, 'utf8', fileWritten);

}
fs.readFile('test.txt', 'utf8', fileRead);
