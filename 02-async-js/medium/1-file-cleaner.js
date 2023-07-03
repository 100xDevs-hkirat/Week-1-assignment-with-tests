const fs = require('fs');
let content = '';

fs.readFile('text.txt',(err, data) => {
    if (err) {
        return console.log(err);
    }

    const cleanedContent = data.toString().replace(/\s+/g,' ');

    fs.writeFile('text.txt', cleanedContent, (err) => {
        if (err) return console.log(err)
    })
});