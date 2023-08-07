const fs = require('fs');

function readFileCallback(filename , callback) {
    fs.readFile(filename, 'utf-8', callback);
}

function printText(err, data) {
    console.log(data);
}

readFileCallback('a.txt',  printText);