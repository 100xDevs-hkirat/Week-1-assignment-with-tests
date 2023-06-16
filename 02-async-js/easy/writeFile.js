const fs = require("fs");

let content = "console.log(\"reading using js\")";

fs.appendFile("readFile.js",content,(err)=>{
    if(err){
        console.error("invalid file");
        return;
    }
});

let sum = (num)=>{
    let sum = 0;
    for(let i = 0; i < num; i++){
        sum+=0;
    }
    return sum;
}

let result = sum(1000000000);

console.log(result);