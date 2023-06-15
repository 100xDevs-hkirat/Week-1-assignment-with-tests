const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, './3-read-from-file.md');  // file path
 

console.log(file);

fs.readFile(file , 'utf8' , (err, data) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log(data);
    }
});