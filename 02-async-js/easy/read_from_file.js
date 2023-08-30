const fs = require('fs');

fs.readFile("file.txt", 'utf8', function(err, fileContent) {
    console.log(fileContent);
});