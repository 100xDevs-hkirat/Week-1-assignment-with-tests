const fs = require('fs');
console.log("Before file")
fs.readFile('file', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("FILE CONTENT: \n"+data);
})

console.log("Before expensive task")
let startTime = new Date();
while (new Date() - startTime < 5000) {}

console.log("After expensive task")