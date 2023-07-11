const fs= require('fs');

fs.writeFile("write.txt","hello world!",(err)=>{
    if(err){
        console.log(err);
    }
    else console.log("file write operation successful");
});