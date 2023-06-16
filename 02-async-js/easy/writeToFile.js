const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'file1.txt');

const content = 'Writing History here broda! Rejoice this moment';

fs.writeFile(filePath,content,'utf8',(err)=>{
  if (err) throw err;
  console.log('The file has been saved!');
    bawalcheez();

})
function bawalcheez() {
  const startTime = new Date();
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  const endTime = Date.now();
  console.log('Expensive operation duration:', endTime - startTime, 'ms');
}
