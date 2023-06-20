// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

var data="Here we go...";

function fileWrite(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('File written successfully');
    }
}

fs.writeFile('file2.txt', data, fileWrite);

var sum=0;
for(var i=0;i<10000000;i++){
    sum+=i;
}
console.log(sum);
