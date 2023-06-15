const { error } = require('console');
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, '', 'file.txt');

fs.readFile(filePath,"utf-8", (error,data)=> {
    if(error){
        console.log(error);
        return
    }

    content = data.replace(/\s+/g,' ').trim();
    fs.writeFile(filePath, content, 'utf-8', (error)=>{
        if(error){
            console.log(error);
            return
        }

        console.log("read the file and cleaned it successfully!");
    })
})