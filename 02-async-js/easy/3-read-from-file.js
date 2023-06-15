const fs = require('fs');

fs.readFile('./3-read-from-file.md', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

})
console.log("hi there!");

for (let i = 0; i < 10000000000; i++) {

}
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");