## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

function printFile(err, data) {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
}

fs.readFile('a.txt', 'utf8', printFile)


// Expensive operation  even though above code is ready still this will be executed firstand will take time unless this is completed that is syncronous operation then asyncronous operation will be executed
var counter = 0;
for (var i = 0; i < 1000000000; i++) {
  counter++;
}