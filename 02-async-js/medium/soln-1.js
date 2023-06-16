const fs = require('fs/promises');

const filePath = 'Q1.txt';

fs.readFile(filePath, 'utf8')
    .then((data) => {
        const cleanedContent = data.replace(/\s+/g, ' ').trim();
        return fs.writeFile(filePath, cleanedContent);
    })
    .then(() => {
        console.log('File cleaned successfully.');
    })
    .catch((err) => {
        console.error('Error cleaning file:', err);
    });
