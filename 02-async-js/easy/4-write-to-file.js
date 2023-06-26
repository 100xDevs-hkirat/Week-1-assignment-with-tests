const fs = require('fs');

const content = "Welcome to the world of Javascript"

fs.writeFile('./easy/4-write-to-file.txt', content, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})

console.log("Hello world");
