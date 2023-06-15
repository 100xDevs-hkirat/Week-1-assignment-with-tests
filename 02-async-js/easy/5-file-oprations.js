// requiring file system
const fs = require('fs');

// reading file
fs.readFile('1.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

// writing to file
fs.writeFile('1.txt', 'writing to the file', 'utf-8', (err) => {
    if(err) throw err;
    console.log('file has been written!')
})

// appending
fs.appendFile('1.txt', 'this line is being appended', 'utf-8', (err) => {
    if(err) throw err;
    console.log('content appended')
})

// renaming file
fs.rename('1.txt', 'newName.txt', (err) => {
    if(err) throw err;
    console.log('file renamed!')
})

// deleting file
fs.unlink('newName.txt', (err) => {
    if(err) throw err;
    console.log('file deleted')
}) 