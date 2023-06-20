const fs = require('fs');
let data = " The data is successfully Written into the file. "
function afterUpdateFile(err){
    if(err){
        console.error(err)
    }
    else{
        console.log("Data was succesfully written. :)")
    }
}
fs.writeFile("write.txt", data, 'utf-8', afterUpdateFile)