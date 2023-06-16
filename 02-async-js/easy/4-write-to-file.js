const fs = require('fs');
let data = 'This is a new File';


fs.writeFile('newFile.txt', data, 'utf-8', (err) => {
    console.log(err);
});