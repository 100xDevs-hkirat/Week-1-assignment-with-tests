const { error } = require('console');
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, '', 'file.txt');
const content = 'added using writeFile'

fs.writeFile(filePath,content,"utf-8", (error) => {
    if(error){
        console.log(error);
        return
    }
    console.log("written to file successfully");
})

let i = 1;
while(i<1000){
    console.log(i);
    i++;
}