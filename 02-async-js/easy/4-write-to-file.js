const fs = require("fs");

function writeFile(){
    fs.writeFile("dummy.txt","Fine, Doing Great",(err)=>{
        if(err){
            throw new err;
        }
    })
}
writeFile();