const fs = require('fs');

const notesPath = '/home/pallavi/Documents/COHORT/Week-1-assignment-with-tests/02-async-js/easy/notes.txt';

function readFileFn(notesPath, callback){
    fs.readFile(notesPath, 'utf8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        callback(data);
    })
   
}
readFileFn(notesPath,(data)=>{
    console.log("data read from file", data);
    return data;
})

var sum=0;
var range = 10;
for(var num=1;num<=range;num++){
    sum+= num;
}
console.log("sum of number from 1 to", range," =", sum);

module.exports = readFileFn;