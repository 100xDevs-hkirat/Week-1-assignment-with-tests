var fs = require("fs")

fs.writeFile("DataW.txt", "This is test\nHello World", function(err) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("File written...");
    }
})

let sum = 0
for (let i = 0; i < 1000000000; i++) {
    sum += i
}
console.log(sum);
