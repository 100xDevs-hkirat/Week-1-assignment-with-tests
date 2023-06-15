const fs = require('fs')

fs.readFile('file.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

let sum = 0;

for(let i = 1; i <= 10000000000; i++) {
    sum += i;
}

console.log(sum);