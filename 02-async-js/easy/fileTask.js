const fs = require('fs');


function readFromFile() {
    fs.readFile('demo.txt',(err,data)=>{
        console.log(data.toString());
    })

    for(let i=0;i<10000000000;i++) {

    }
}

function writeToFile() {
    fs.writeFile('demo.txt',"Hello there !! Writing to file",(err)=>{
        console.log("Write Done");
    });
}

readFromFile();