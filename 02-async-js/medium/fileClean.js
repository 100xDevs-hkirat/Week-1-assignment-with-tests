const fs = require('fs')

const path = "1-file-cleaner.md"

fs.readFile(path,'utf8',readFile)

function readFile(err,data)
{
    var size = data.length
    var count=0;
    const trimmedStr = data.replace(/\s+/g, ' ').trim();

    fs.writeFile(path,trimmedStr,'utf8',writeFile)
}

function writeFile(err)
{
    console.log(err)
}