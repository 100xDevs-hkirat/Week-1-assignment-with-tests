const fs = require("fs");
const path = require("path");
let content = "Problem Solved";

const filePath = path.join(__dirname, "demo.txt");

fs.writeFile(filePath, content, () => {
  console.log("Wirte operation done succesfully.");
});
