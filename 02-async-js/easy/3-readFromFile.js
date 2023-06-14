const fs = require("fs")

fs.readFileSync('3-read-from-file.md', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("DATA => " + data);
  });
  