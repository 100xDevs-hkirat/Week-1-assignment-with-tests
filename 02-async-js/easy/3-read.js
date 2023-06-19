const fs = require('fs')

const path = './text-file.txt'

function readContent(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
}

fs.readFile(path, 'utf-8', readContent);