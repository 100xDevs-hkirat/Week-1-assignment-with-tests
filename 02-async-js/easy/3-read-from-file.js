const fs=require('fs')

const filePath="file.txt"

fs.readFile(filePath,'utf8',(err,data)=>{
    if (err){
        console.log("Error reading the file",err);
        return;
    }

    console.log("File Contents are ",data);
});

sum=1;
for(let i=1;i<10000000000;i++)
    sum+=i;