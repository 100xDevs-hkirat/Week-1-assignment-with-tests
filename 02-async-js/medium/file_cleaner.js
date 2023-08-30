const fs = require('fs');

function clean(data) {
    let arr = data.split(" ");
    let answerArray = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i].length == 0) {}
        else{
            answerArray.push(arr[i]);
        }
    }
    let str = answerArray.join(" ");
    return str;
}
function fileWritten(err) {
    if(err) {
        console.error(err);
        return;
    }
    console.log("done");
}
function fileRead(err, data) {
    if(err) {
        console.error(err);
        return;
    }
    let cleanedData = clean(data);
    fs.writeFile("cleaned.txt", cleanedData, 'utf8', fileWritten);
}
fs.readFile("a.txt", 'utf8', fileRead);
