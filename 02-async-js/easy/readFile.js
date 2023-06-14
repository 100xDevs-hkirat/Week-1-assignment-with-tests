const { error } = require('console');
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, '', 'file.txt');

fs.readFile(filePath, 'utf-8', (error,data) => {
    if(error){
        console.log("An error occured:", error)
        return;
    }

    console.log(data);
})

let i = 1;
while(i<100000){
    console.log(i);
    i++;
}