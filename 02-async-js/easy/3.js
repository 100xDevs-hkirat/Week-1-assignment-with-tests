
const fs = require('fs');

function fileRead(err, data) {
    console.log(data)
}
fs.readFile("3-read-from-file.md", "utf-8", fileRead)