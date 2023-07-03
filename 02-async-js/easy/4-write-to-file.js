const fs = require('fs');

fs.writeFile('inputs1.txt', '_hello harish',(err) => {
    if (err) return console.log(err);
});

fs.readFile('inputs1.txt', (err,data) => {
    if (err) return console.log(err);
    console.log('read file:' + data)
});