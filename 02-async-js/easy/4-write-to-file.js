const fs = require('fs');

fs.writeFile('sample-text.txt','This is some sample data to write to the file.','utf8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('File has been written');
});