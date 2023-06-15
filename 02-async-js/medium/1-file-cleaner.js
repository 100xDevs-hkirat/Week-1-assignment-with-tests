const fs=require('fs');
const path='C:\\Users\\Siva krishna\\Week-1-assignment-with-tests\\02-async-js\\file.txt';
var str="";
fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.error("Falid to fatch");
        return;
    }
    str+=(data);
    var s1=str.split(/[ ]+/).join(" ");
fs.writeFile(path,s1,'utf-8',(err)=>{
      if(err){
        console.error('faild to write the message');
        return;
      }
      console.log("cleaning done");
})
}) 
