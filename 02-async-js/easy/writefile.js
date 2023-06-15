
const fs = require('fs');
const filePath ='data.txt';
fs.writeFile(filePath, 'Hello World!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);