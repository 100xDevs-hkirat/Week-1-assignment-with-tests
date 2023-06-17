const fs = require('fs');

const content = "This is called JS Coding!";

fs.appendFile('./Hi there!.txt', content, 'utf8', (err) => {
  if (err) {
    console.error("Error writing to this file!");
    return;
  }
});

fs.readFile('./Hi there!.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading this file!");
    return;
  }

  console.log("Updated file contents are :- \n", data);
});