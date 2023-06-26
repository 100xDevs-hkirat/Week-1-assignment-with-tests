const fs = require('fs');

function write(path, data) {
    fs.writeFile(path, data, 'utf8', (error) => {
        if (error) {
            console.log("cannot complete. Check if the path is correct.")
        }
    })
}

write('./writeTo.txt', "I think therefore I am");