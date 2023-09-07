const fs = require('fs');

let data = "Is this really Happenining?";

function afterContentUpdated(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File updated");
}

fs.writeFile('02-async-js/easy/soln/a.txt', data, afterContentUpdated);