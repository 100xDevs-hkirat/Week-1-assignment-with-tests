//Two ways to write to a file
// Using writeFile() or appendFile()
//writeFile() will replace and overwrite everything in the file 
//appendFile() will simply add the new data to the end of the content in the file


const fs = require('fs');

const filePath = "./a.txt";

const newContent = " To infinity and beyond"

fs.writeFile(filepath, newContent, 'utf8', (err,data)=> {
        if(err){
            console.error("there's some error")
        } else {
            console.log("File Succesfully overwritten")
        }
})
