// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content = `// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.`;

try {
  fs.writeFileSync('./a.txt', content);
  console.log("writting success")
} catch (err) {
  console.error(err);
}

console.log("after writing")