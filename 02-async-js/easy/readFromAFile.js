const fs = require('fs')

function printFile(err,data){
    if(err){
        console.error(err); 
        return;
    }
    else{
        console.log(data)
    }
}

fs.readFile('ex.txt', 'utf8', printFile)
var counter = 0;
for(var i = 0; i<10000000000; i++){
    counter += i
}
console.log(counter)