// ## Reading the contents of a file

const fs = require('fs');

fs.readFile('<YOUR_FILE_PATH>','utf8',printFile)

function printFile(err, data){
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
}

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

