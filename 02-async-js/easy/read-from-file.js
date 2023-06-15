const fs = require('fs');

let startTime = Date.now();
fs.readFile('./1-counter.md', 'utf8', (err, data) => {
    let callbackCalledAt = Date.now();
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log("Time taken to call the callback function is (in millis) : "+(callbackCalledAt-startTime));
  });

  // expensive operation. The callback is called after some delay
  let sum = 0;
  for(let i=0;i<10000000;i++){
    sum += i;
  }