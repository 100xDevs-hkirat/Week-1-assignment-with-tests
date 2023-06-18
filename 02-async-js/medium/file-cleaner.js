let fs = require('fs');

let content='' ;

function readAndClean(data){
    data = data.replace(/\s+/g, " ");
    console.log(data);
    content = data;
}


content = fs.readFile('test.txt','utf-8',(err,data)=>{
   readAndClean(data);
});
console.log(content);