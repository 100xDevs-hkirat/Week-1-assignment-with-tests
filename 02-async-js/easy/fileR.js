const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
