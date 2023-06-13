
const fs = require('fs');

function readFile(file) {
  return fs.readFileSync(file, 'utf8');
}

const contents = readFile('myfile.txt');
console.log(contents);

let count =0;
for (let i= 1; i<=1000000;i++){
  count+=i;
}
console.log(count);