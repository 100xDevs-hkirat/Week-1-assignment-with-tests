## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

### Solution
```js
const fs = require('fs');

function writeToFile(data) {
  fs.writeFile('b.txt', data, (err) => {
    if (err) throw err;
    console.log("Data written to file!!!");
  });
}

writeToFile("Hello to b.txt");
```