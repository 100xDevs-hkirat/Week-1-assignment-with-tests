const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'file1.txt');

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);

  bawalcheez();
});

function bawalcheez() {
  const startTime = new Date();
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  const endTime = Date.now();
  console.log('Expensive operation duration:', endTime - startTime, 'ms');
}
