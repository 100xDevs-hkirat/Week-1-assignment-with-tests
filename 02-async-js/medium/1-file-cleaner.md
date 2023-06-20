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

fs.readFile('nitin.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  var arr = data.split(' ');
  var ans = '';
  for(let i = 0;i<arr.length;i++){
    if(arr[i]!=''){
      ans = ans + arr[i] + ' ';
    }
  }
  console.log(ans);
});
