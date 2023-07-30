const fs = require('fs');

 let data = "Hi there I need this data to be written in the write.txt file ...."

 fs.writeFile("write.txt", data, 'utf8', (err) => {
    if(err){
        console.log("Error");
        return;
    }
    console.log("File updated");
 })