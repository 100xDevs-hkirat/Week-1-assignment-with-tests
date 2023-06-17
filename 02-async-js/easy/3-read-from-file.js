//Reading the contents of a file. Write code to read contents of a file and print it to the console. 

const fs = require('fs');

fs.readFile('./Hi there!.txt', 'utf8', (err, data) => {

  if (err) {
    console.error("Error reading the file!", err);
    return;
  }
  console.log("Contents of the file are :- ");
  console.log(data);
});