## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function errorfn(err){
  if(err){
    console.log("Cannot write to the file");
  }
  else{
    console.log("File has been written");
  }
}

var data = "Senpai Here!"

fs.writeFile('a.txt',data,errorfn);
