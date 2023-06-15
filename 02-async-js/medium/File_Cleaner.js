const fs = require("fs");
const path  = require("path");

const file = path.join(__dirname, "./test.txt");

fs.readFile(file , 'utf-8' , (err, content) => {
    if(err) console.log(err);
    let data = content;
    data = data.trim().replace(/\s+/g , ' ');
    fs.writeFile(file , data , (err, data) => {
        if(err) console.log(err);
    });
})  