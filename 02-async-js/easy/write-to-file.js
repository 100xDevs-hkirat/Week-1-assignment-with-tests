

const fs = require('fs');

// write to file
function fileIsWritten(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('file written');
}
fs.writeFile('a.txt', 'hello world', fileIsWritten);