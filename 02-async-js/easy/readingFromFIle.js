
var fs = require("fs");

fs.readFile("readingFile.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});