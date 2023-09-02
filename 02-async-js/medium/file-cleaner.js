const fs = require('fs');

function fileIsRead(err, content) {
    if (err) {
        console.log(err);
        return;
    }
    var text = content.replace(/\s+/g, ' ');
    console.log(text);
    fs.writeFile('a.txt', text, function(err){

    });
}

fs.readFile('aa.txt', 'utf-8', fileIsRead);
