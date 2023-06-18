let fs = require('fs');

const content = "qwrtgrwfd something someething"

fs.writeFile('test.txt',content,(err) => {
    if (err)
        console.log(err);
});