const fs = require("fs");

const filePath = "./data.txt";
const dataToOush = "This is newly edited data";
fs.writeFile(filePath, dataToOush, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully written");
  }
});

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
