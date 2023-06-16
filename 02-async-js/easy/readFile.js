const fs = require('fs')

const path = "3-read-from-file.md"

fs.readFile(path,'utf-8',fileRes)

for(var i=0;i<10000000000;i++)
{
    
}

function fileRes(err,data)
{
    console.log(err);
    console.log(data);
}
