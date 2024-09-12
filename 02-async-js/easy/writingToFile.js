
var fs = require("fs"); 

const content = "abcd";

fs.writeFile("readingFile.txt",content,(err)=>{
    if(err) console.log(err);
} )