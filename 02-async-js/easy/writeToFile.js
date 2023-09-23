const fs = require('fs')

let data = "this will be written through fs library"

fs.writeFile('b.txt', data, 'utf-8', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('file has been written!')
});