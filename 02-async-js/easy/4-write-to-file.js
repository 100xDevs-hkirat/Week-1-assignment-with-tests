const fs=require('fs');
const filepath='C:\\Users\\Siva krishna\\Week-1-assignment-with-tests\\02-async-js\\file.txt';
const addcontent='added this content successfully done this......!!';
fs.writeFile(filepath,addcontent,'utf-8',(err)=>{
       if(err){
        console.error(err);
        return;
       }
       console.log("successfull");
})