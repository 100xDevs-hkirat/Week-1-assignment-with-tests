const fs = require("fs");

let textIn = "You are reading the file";

fs.writeFile("./text.txt", textIn, (err) => {
  if (err) throw Error("Error !");
  else {
    console.log("Your date is been written");
  }
});
