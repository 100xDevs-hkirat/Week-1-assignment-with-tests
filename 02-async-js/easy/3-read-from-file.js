var fs = require('fs');

fs.readFile("Data.txt", "utf-8", function(err, data) {
    console.log(data);
})

let sum = 0
for (let i = 0; i < 1000000000; i++) {
    sum += i
}
console.log(sum);