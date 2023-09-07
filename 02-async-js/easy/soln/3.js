const fs = require('fs');

fs.readFile('02-async-js/easy/soln/a.txt', 'utf8', printFile);

function printFile(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}
