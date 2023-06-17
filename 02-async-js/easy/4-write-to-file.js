## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


### code
const fs = require('fs');
let data = "writing into the file....";
function afterUpdate(err){
    if (err){
        console.log(err);
        return;
    }
    console.log("File has been written");
}
fs.writeFile('test.txt', data, 'utf8', afterUpdate);

