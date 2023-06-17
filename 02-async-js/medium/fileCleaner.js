const fs = require('fs');

function clean(data) {
    var arr = data.split(" ");
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
        } else {
            ans.push(arr[i]);
        }
    }
    var cleanData = ans.join(" ");
    return cleanData;
}

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

function readingWriting(err, data, filePath) {
    if (err) {
        console.log("Error while reading file");
        return;
    }
    var cleanData = clean(data);
    writeFile(filePath, cleanData);
}

function readFileWrite(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        readingWriting(err, data, filePath);
    });
}

function fileCleaner(filePath) {
    readFileWrite(filePath);
}

fileCleaner("./test.txt");
