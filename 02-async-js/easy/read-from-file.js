const { Console } = require("console");
const fs = require("fs");

const filePath = "./data.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("data", data);
});
