const fs = require("fs");
const data = "Hello Hiii by mere yarraa";
fs.appendFile("a.txt", data, (err) => {
  if (err) {
    console.log(err);
  }
});
