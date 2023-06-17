const fs= require('fs');


function writeFile(err){

    if(err){
        console.error(err)
        return;
    }
   console.log("File written successfully");
}

fs.writeFile('./temp.txt','Hello world','utf-8',writeFile);