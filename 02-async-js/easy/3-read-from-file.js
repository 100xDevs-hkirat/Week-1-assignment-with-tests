const fs = require("node:fs");

fs.readFile("read.txt", "utf-8", (err, data) => {
  if (err) throw err;
  else {
    console.log(data);
  }
});

for (let i = 0; i < 10000000000; i++) {
  let count;
  count++;
}
