const fs = require('fs').promises;

const filePath = 'test.txt';
fs.readFile(filePath, 'utf8')
    .then((data) => {
        const cleanedData = data.replace(/\s+/g, ' ');
        return fs.writeFile(filePath, cleanedData, 'utf8');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
