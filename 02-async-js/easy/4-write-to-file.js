const fs = require('fs');

function writeFile(err){
    if(err){
        console.log(err);
    }
    console.log("success");
}

fs.writeFile('../README.md','HELLO','utf-8',writeFile);