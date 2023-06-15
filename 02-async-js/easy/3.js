const fs = require("fs");

fs.readFile("02-async-js/easy/3.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); // Will output: 'Hello, World!'
});

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
