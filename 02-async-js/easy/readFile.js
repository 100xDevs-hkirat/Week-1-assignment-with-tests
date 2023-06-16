const fs = require("fs");

fs.readFile("counter2.js","utf-8",(err,data)=>{
    if(err){
        console.error("invalid file");
        return;
    }
    console.log(data);
});

let sum = (num)=>{
    let sum = 0;
    for(let i = 0; i < num; i++){
        sum+=0;
    }
    return sum;
}

let result = sum(10000000000);

console.log(result);