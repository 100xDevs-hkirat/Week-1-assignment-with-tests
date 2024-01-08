const fs = require('fs');
const path = require('path');
function read(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}
const filePath = path.join(__dirname, 'read.txt');
fs.readFile(filePath, 'utf8', read);
