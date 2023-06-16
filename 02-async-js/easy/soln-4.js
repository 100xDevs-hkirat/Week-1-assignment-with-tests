const fs = require('fs');

const content = 'Hi I am Ankith and this is the content that is going to be written into text file.';

fs.writeFile('Ankith.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Successfully wrote to file.');
    }
});