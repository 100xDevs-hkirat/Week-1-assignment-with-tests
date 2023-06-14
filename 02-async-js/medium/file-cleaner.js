const fs=require('fs')
let content=fs.readFileSync('candy.txt','utf-8');
console.log(content)
content=content.replace(/\s+/g,' ');
console.log(content)
fs.writeFileSync('candy.txt',content,'utf-8',(error)=>{
    if(error){
        console.error('Error writing to the file:', error);
        return;
    }
    console.log("File cleaned");
});