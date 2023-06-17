// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
const fs = require("fs");

function readFileViaPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (error, data) => {
            if (error) reject(error);
            resolve(data);
        });
    });
}


function readFileViaCallback(path, callback) {
    fs.readFile(path, 'utf-8', (error,data) => {
        if (error) callback(error);
        else callback(data);
    });
}

function writeFileViaPromise(path,data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (error) => {
            if (error) reject(error);
            resolve('success in writing data');
        })
    }) 
}

function writeFileViaCallback(path, data, callback) {
    fs.writeFile(path, data, (error) => {
        if (error) callback(error);
        else callback('success');
    })
}

function removeExtraSpaces(sentence) {
    var extraSpaceRemovedSentence = '';
    for (var i = 0; i < sentence.length; ++i){
        if (i !== 0 && sentence[i - 1] === ' ' && sentence[i] === ' ') continue;
        extraSpaceRemovedSentence += sentence[i];
    }
    return extraSpaceRemovedSentence;
}

writeFileViaPromise('test.txt', 'hello     world    my    name   is       raman').then((data) => {
    console.log(data);
    return readFileViaPromise('test.txt');
}).then((data) => {
    var modifiedData = removeExtraSpaces(data);
    console.log(`old data - ${data}, new data - ${modifiedData}`)
    return writeFileViaPromise('test.txt',modifiedData)
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})