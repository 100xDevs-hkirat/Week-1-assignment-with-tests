const fs = require('fs');

function readFile(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
}

fs.readFile('../README.md','utf-8',readFile);