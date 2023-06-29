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

---------------------------------------------MyCodeBelow------------------------------------------------------------

fs = require('fs')

function clean(data){
let cleanerData = data.replace(/\s+/g,' ').trim()
return cleanerData
}

fs.readFile('file.txt','utf8', (err,data) => {
if (err){
console.error(err)
return;
} else {
let content = clean(data)
fs.writeFile('file.txt', content, 'utf8', (err) => {
if(err){
console.error(err)
} else {
console.log("Data has been cleaned")
}
})
}
})

----------------------------------------------MyCodeAbove-----------------------------------------------------------
