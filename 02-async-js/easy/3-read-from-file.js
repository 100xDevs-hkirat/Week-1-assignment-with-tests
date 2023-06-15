const fs = require('fs');

const filePath = './file.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});


let count=1;
for(let i=1;i<=1000000000000;i++ ){
  count=i;
}
console.log(count);