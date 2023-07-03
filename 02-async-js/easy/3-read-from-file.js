const fs = require('fs');

fs.readFile('inputs1.txt', (err, data) => {
    if(err) return console.log(err)
    console.log('data read:' + data.toString());
});

console.log('hi');

for (let i=0; i<1000000; i++) {
    console.log(i)
}

for(let i=0; i<100; i++) {
    console.log('small task')
}