const fs = require('fs');

const path = "4-write-to-file.md"

fs.readFile(path,'utf-8',getfile)

function getfile(err,file)
{
    console.log(file)
    var newdata = "\n\n Here is a new line \n \n Lets see what this will do"
    file = file + newdata
    fs.writeFile(path, file, 'utf-8',writeInFile)
}

function writeInFile(err)
{
    if(err)
    console.log(err)
}