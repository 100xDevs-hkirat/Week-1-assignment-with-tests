const fs = require("fs");

const content = "My name is Vaishnavi";
fs.writeFile("a.txt", content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
