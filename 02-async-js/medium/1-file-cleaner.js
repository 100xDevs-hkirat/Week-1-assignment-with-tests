const fs = require('fs')

function readFile(err,data){
    if(err){
        console.log(err);
    }
    const modifiedContent= data.replace(/\s+/g," ");
    fs.writeFile('../README.txt',modifiedContent,'utf-8',writeFile);
}

function writeFile(err){
    if(err){
        console.log(err);
    }
    console.log("write Successful");
}

fs.readFile('../README.txt','utf-8',readFile)