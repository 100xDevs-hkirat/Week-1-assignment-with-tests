const fs = require('fs');

function printFile(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data)

}


fs.readFile('a.txt', 'utf-8', printFile)