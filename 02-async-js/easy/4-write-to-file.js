const fs = require('fs')

fs.writeFile('file2.txt', "this is a text from code, i'm writing the file", 'utf-8', (err) => {
    if(err) throw err;
    console.log('file has been written');
})