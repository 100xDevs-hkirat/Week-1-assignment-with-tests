## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


##Solution
//this is using promises, this is the new and better method. In test.js(my personal file in replit @Tanaykmr), we usle the old fashioned node.js way

const fs = require('fs/promises');
const readFile = async() => {
  try {
    const data = await fs.readFile("a.txt", 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFile();
var sum = 0;
for (let i = 0; i < 10; i++)
  {
    sum+= i;
    console.log(i + ": sum is: " + sum);
  }

console.log(sum);

