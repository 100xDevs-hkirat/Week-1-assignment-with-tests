// ## Write to a file

const fs = require('fs');


let path = "<YOUR_FILE_PATH>"

let data = "Hello World! has been written on the file."

fs.writeFile(path,data,'utf8',update);

function update(err){
    if (err){
        console.log(err);
        return;
    }
    console.log("Data Written!");
}



// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.