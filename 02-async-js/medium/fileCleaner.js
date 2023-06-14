const fs = require("fs");
const filePath = "../easy/text.txt";

function readFile(err, text) {
  let str = "";
  str = text;
  let cleaner = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      cleaner.push(words[i]);
    }
  }
  const content = cleaner.join(" ");

  function writeFile(err, text) {
    console.log("Writing contant to text.txt file !");
  }
  fs.writeFile(filePath, content, "utf-8", writeFile);
}

str = fs.readFile(filePath, "utf-8", readFile);
