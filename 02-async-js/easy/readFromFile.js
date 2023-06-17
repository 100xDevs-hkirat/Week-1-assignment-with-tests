const fs= require('fs');

function readFile(err,data){
if(err){
    console.error(err);
    }
    console.log(data);
}

fs.readFile('./temp.txt','UTF-8',readFile);

