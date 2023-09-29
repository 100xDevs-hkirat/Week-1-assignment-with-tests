## Write to a file

const fs = require('fs');
const path = require('path');

const filePath = path.join(\_\_dirname, 'demo.txt');

const datatoWrite = " hello boy" ;

fs.writeFile(filePath, datatoWrite , 'utf-8' , (err) => {
if(err) {
console.error("Error writing to file " + err);
}
else{
console.log("file has been Writing succefully ");
}
});

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
