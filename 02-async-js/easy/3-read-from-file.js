var fs = require('fs');
function readTextFromFile(){
    fs.readFile("02-async-js\\easy\\test.txt", "utf-8",(err,data)=>{
        if(!err){
            console.log(data);
        }
        else{
            console.log(err);
            throw Error(err);
        }
    });
}

readTextFromFile();