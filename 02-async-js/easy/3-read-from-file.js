const fs=require('fs');
fs.readFile('C:\\Users\\Siva krishna\\Week-1-assignment-with-tests\\02-async-js\\file.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});