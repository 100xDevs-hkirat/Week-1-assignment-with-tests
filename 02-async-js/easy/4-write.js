const fs = require('fs')
const path = './text-file.txt'

function cb(err) {
    if (err) {
        console.log('write error!');
        return;
    }
    console.log('write done');
}

fs.writeFile(path, "this is updated file", cb);