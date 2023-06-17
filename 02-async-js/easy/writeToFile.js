const fs = require('fs');

function errFun(err) {
    if (err) {
        console.log("Error while writing file");
        return;
    }
    console.log("File written successfully");
}

function writeFile(filePath, data) {
    fs.writeFile(filePath, data, 'utf8', errFun);
}

writeFile("./test.txt", "Hmm Interesting ajkshak");
