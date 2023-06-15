/**
 * Write to a file
 * Using the fs library again, try to write to the contents of a file.
 * You can use the fs library to as a black box, the goal is to understand async tasks.
 */

const fs = require('fs');

// async call back triggered once file write completes
function writeCallBack(err) {
    if (err) {
        throw err
    } else {
        console.log("File write completed ..");
    }
}

fs.writeFile("4-file.txt", "File write completed, all clear", writeCallBack);