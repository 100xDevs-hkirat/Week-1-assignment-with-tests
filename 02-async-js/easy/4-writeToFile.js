const fs = require("fs")

fs.writeFile('4-write-to-file.md', " Wrritten from fs Module", err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been written successfully.');
  });

