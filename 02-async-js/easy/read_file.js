const fs = require('fs');

fs.readFile('easy/counter.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

var count = 0
for (let i = 0; i < 100333333; i++) {
    count = count + 1
}

console.log(count)