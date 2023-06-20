const { isUtf8 } = require('buffer')
const fs = require('fs')
var fileData = ''
function afterReadFunc(err, data){
    if(err){
        console.error(err)
    }
    else{
        fileData = data
        // console.log(fileData)
        var cleanData = cleanFile(fileData)
        cleanData = cleanData.join(' ')
        writeCleanData(cleanData)
    }
}
function writeCleanData(data){
    fs.writeFile('output.txt',data, 'utf-8', afterWrite);
}
function afterWrite(err, data){
    if(err){
        console.error(err);
        return
    }
    else{
        console.log("The data is Written into the file\n")
    }
}
function cleanFile(file){
    file = file.split(" ")
    // console.log(file)
    var cleanArr = [];
    for(let i = 0; i<file.length; i++){
        if(file[i].length != 0){
            cleanArr.push(file[i])
        }
    }
    return cleanArr;

}
fs.readFile('input.txt', 'utf-8', afterReadFunc)