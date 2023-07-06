const fs = require('fs').promises;

fs.readFile('3-read-from-file.md', 'utf-8').then((contents) =>
  console.log(contents)
);

const expensiveFunction = (n) => {
  console.log('Expensive function blocks thread');
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

expensiveFunction(10000000000);
