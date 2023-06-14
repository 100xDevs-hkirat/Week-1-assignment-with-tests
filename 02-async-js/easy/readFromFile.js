const fs = require("fs");

fs.readFile("./text.txt", (err, inputD) => {
  if (err) throw Error("Error !");
  else {
    console.log(inputD.toString(), "\nYour date has been readed");
  }
});
