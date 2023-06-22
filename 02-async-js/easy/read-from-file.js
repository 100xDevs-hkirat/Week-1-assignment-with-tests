

const fs=require("fs");
fs.readFile('a.txt','utf-8',readFile);
function readFile(data,err){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }

}