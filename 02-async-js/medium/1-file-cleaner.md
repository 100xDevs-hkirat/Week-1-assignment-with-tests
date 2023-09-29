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
const path = require('path');

const filePath = path.join(__dirname, 'demo.txt');
let dataRecieved;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { throw err }
    else {
        dataRecieved = (data);
        console.log(dataRecieved);
    }

    const newArray = dataRecieved.split(' ');
    // console.log(newArray);

    const filteredArray = [];

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] != '') {
            filteredArray.push(newArray[i]);
        }
    }

    console.log(filteredArray);
    console.log(filteredArray.length);

    const outputString = filteredArray.join(' ');

    console.log(outputString + "\nlength is  : " + typeof (outputString));
});

