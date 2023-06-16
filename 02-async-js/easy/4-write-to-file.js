const fs= require('fs');

const filepath ="text.txt"

const  fileContent = "Adding some content after reading and this is what i am writting "

fs.writeFile(filepath, fileContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
  
    console.log('File write operation completed.');
  });