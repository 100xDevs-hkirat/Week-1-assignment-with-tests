const fs = require('fs');

const filePath = 'name.txt';

fs.readFile(filePath, 'utf8', function readData(err, data){
    if(err){
        console.log("Error: " + err);
        return;
    } else{
        console.log("DATA IN FILE:\n" + data);
        let updatedData = ""
        let spaces = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i] === ' '){
                spaces++;
            }else{
                spaces = 0;
            }
            if(spaces <= 1){
                updatedData += data[i];
            }
        }

        fs.writeFile(filePath, updatedData, 'utf-8', function(err){
            if(err){
                console.error(err);
                return;
            }
            console.log("File Written Successfully");
        })
    }
});