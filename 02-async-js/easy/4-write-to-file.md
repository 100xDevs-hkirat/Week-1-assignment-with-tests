## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
const fs=require('fs')
function Written(){
    console.log("Data is added to the file")
}
fs.appendFile('file.txt',' /n I Am a Software Devolper',Written);

let sum=0
for(let i=0;i<100000000;i++){
    sum+=i;
}
console.log(sum)
