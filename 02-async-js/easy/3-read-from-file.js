var fs = require("fs");

fs.readFile("1-counter.js", "utf8", (_, data) => {
  console.log(data);
});

for (var i = 0; i < 1000000000; i++);

console.log("done");