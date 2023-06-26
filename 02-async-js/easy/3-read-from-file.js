const fs = require("fs");

function dummy(){
    console.log("hello");
}

function printContent(err, data){
    setTimeout(dummy,2000);
    console.log(data);
}

fs.readFile('./easy/3-read-from-file.md','utf-8', printContent);

console.log("hello world");