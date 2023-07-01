const fs = require("fs");

fs.readFile("./02-async-js/easy/file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
