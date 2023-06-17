## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.




const fs = require('fs');
let data = "Rasendra Kaushik is a learner";
function afterContentsUpdated(err){
  if(err){
    console.error(err);
    return;
  }
  console.log("File has been written");
}

fs.writeFile('a.txt',data, 'utf8', afterContentsUpdated);