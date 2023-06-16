// const { readFileFn } = require("../easy/3-read-from-file.js");
const fs = require('fs');
const filePath = '/home/pallavi/Documents/COHORT/Week-1-assignment-with-tests/02-async-js/medium/file.txt';

function removeExcessWhitespace(notesPath, callback) {
    fs.readFile(notesPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(data);
    })

}
removeExcessWhitespace(filePath, (data) => {
    var dataWithoutWhitespaces = "";
    for (var idx = -1; idx < data.length;) {
        var char = data[++idx];
        // console.log(char);
        var flag = false;
        while (char != ' ' && char != '\n' && char != undefined) {
            dataWithoutWhitespaces += char;
            // console.log(char);
            char = data[++idx];
            flag = true;
        }

        if (flag && char != undefined) {
            dataWithoutWhitespaces += char;
        }

    }
    writeDataWithoutWhitespaces(dataWithoutWhitespaces);

})

function writeDataWithoutWhitespaces(content) {
    fs.writeFile(filePath, content, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}
