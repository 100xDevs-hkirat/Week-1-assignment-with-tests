/*  Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require('fs');

let write = "Hey Vamsi, I'm Fine!"

fs.writeFile("sample1.txt", write, (err) => {
  if (err){
    throw err;
  }
  else{
    console.log("Success");
  }
});