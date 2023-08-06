const fs = require('fs');
const content = "Hello this is Rasimul"
fs.writeFile("text.txt",content,(err)=>{
    if(err){
        console.err;
        return;
    }
})


let j = 0;
for(let i=0;i<10000000000;i++){
    j+=1;
}
console.log(j);