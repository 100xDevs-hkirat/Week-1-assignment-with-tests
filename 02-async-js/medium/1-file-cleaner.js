const fs = require("fs");
const file = "data.txt";

fs.writeFileSync(
  file,
  "    hello           world       my   name is        Harsh   "
);

fs.promises.readFile(file).then((buff_data) => {
  let text_data = buff_data.toString();
  text_data = text_data.trim().replace(/\s+/g, " ");
  fs.writeFile(file, text_data, (err) => {
    if (err) console.log("Error Occured");
  });
  console.log(text_data);
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
