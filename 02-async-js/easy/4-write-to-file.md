## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

##Solution

async function writeFile() {
  const fs = require('fs/promises');

  const content = 'This is the content of my file.';
  const filename = 'my_file.txt';

  await fs.writeFile(filename, content);

  console.log(`File ${filename} written successfully.`);
}

writeFile();
