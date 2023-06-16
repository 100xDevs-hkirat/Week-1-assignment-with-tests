const fs = require("fs");

fs.promises
  .readFile("data.txt", "utf-8")
  .then((buf_data) => {
    console.log(buf_data);
  })
  .catch((err) => {
    console.log(err);
  });

expensiveTask();

function expensiveTask() {
  let cnt = 0;
  let start = Date.now();
  for (let i = 0; i < 10000000000; ++i) {
    cnt++;
  }
  console.log("Expensive task took: " + (Date.now() - start) / 1000);
}

let buff_data = fs.readFileSync("data.txt");
console.log(buff_data);
