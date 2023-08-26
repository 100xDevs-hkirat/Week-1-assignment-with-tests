const fs = require('fs')


function readingFile() { 
    fs.readFile('./02-async-js/easy/file.txt', (err, data) => {
        if (err) throw err;

        console.log(data.toString());
    })
}

console.log("Starting...")
readingFile()
console.log("Ending...")