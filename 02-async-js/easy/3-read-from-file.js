const fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf-8', (err, content) => {
    console.log(content);
})

console.log('this will run before');