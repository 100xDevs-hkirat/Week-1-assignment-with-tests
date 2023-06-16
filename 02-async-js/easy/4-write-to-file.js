let data = "Hello World!! Harsh This side";
let file = "data.txt";

const fs = require("fs");
fs.writeFile(file, data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Written to the file");
  }
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
