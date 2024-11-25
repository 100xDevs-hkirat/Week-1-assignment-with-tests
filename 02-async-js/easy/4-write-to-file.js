const fs = require('fs');

console.log("Before file write")
fs.writeFile('output', `Hello`,(err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("Write complete")
})

console.log("After file write")
let startTime = new Date();
while (new Date() - startTime < 10000) { }
console.log("After expensive task")