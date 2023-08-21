const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let str = data.trim();
  let count = 0;
  data = str.split("").reduce((str, char) => {
    if (char === " " && count !== 0) {
      return str + "";
    } else if (char === " " && count === 0) {
      count++;
      return str + char;
    } else {
      count = 0;
      return str + char;
    }
  });
  fs.writeFile("a.txt", data, (err) => {
    if (err) throw err;
  });
});
