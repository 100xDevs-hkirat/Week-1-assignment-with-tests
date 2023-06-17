const fs = require('fs');

function reading(err, data) {
    if (err) {
        console.log("Error while reading file");
        return;
    }
    console.log(data);
}

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', reading);
}

readFile("./test.txt");

var counter = 0;

for (var i = 0; i < 1000000000; i++) {
    counter++;
}

console.log(counter);
