const fs= require("fs");

function readFil(){
    fs.readFile("dummy.txt","utf-8",(err,data)=>{
        console.log(data);
    })
}

readFil();

module.exports = readFil();