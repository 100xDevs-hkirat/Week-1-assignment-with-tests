const fs = require('fs');

const filePath = "./a.txt";

//Reading the content of the file and logging it to console

fs.readFile(filePath, 'utf8', (err,data)=> {
    if(err){
        console.error("there is an error ",err)
    } else {
        console.log(data)
    }
})