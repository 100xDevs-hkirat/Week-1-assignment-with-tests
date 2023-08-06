const fs = require('fs');

fs.readFile('text.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

let j = 0;
for(let i=0;i<10000000000;i++){
    j+=1;
}
console.log(j);