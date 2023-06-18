/**
 * 
 * ## File cleaner
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
const cleanText = (text) => {
    const arr = text.split(' ').filter((word) => {
        return word.length > 0;
    });
    const cleanedText = arr.join(' ');
    return cleanedText;
}
fs.readFile('./files/sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const cleanedText = cleanText(data);
    console.log(cleanedText);
})
