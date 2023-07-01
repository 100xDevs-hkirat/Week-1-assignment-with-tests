const fs = require('fs');

fs.readFile('a.txt','utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

let counter=0;
for(let i = 0;i<1_000_000_000;i++){
    counter += i; 
}