console.log("Start");
const fs = require('fs');
fs.readFile('./dummy-file.txt', 'utf-8', (err, data)=> {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});
let i =0
for(i=0; i< 100000; i++){
    i = i+1;
}
console.log(i)
console.log("End");