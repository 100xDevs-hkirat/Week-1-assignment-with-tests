const fs = require('fs');

fs.writeFile('./temp.txt', "Hello World", err => {
   if (err) {
      console.error(err);
    }
  });