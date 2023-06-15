const fs = require('fs')

fs.readFile('1.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    let content = data;
    console.log(content);

    // removing extra spaces using regular expression
    content = content.replace(/\s+/g, ' ').trim();
    console.log(content);

    // writing to file
    fs.writeFile('1.txt', content, 'utf-8', (err) => {
        if(err) throw err;
        console.log('file written')
    })
})