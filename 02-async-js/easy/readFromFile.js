const fs = require('fs');
function readFile(path) {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.log("cant read file. Check if the path is correct.");
            return;
        } else {
            console.log(data);
        }
    })
}

readFile('./example.txt');