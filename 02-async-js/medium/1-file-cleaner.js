const fs = require("fs");

function readFil() {
  fs.readFile("dummy2.txt", "utf-8", (err, data) => {
    const updatedData = data.replace(/\s+/g, " ");
    fs.writeFile("dummy2.txt", updatedData, (err) => {
      if (err) {
        throw new err();
      }
    });
  });
}

readFil();
