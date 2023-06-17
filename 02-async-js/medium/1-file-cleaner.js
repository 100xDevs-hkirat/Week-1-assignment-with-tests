const fs = require('fs')

fs.readFile('file', 'utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    let updatedContent = cleanUpTheContent(data);
    fs.writeFile('file', updatedContent, (err) => {
        if(err)
            throw err;
    })
})

function cleanUpTheContent(content) {
    let updatedContent = "", line = "";
    console.log(content.length)
    console.log(content.length)
    for (let ch of content) {
        if (ch == ' ') {
            if (!line.endsWith(' ')) {
                line += ch;
            }
        } else if (ch == '\n') {
            line += ch;
            if(line.length>1)
                updatedContent += line;
            console.log(line.includes('\n'), line)
            line = "";
        } else {
            line += ch;
        }
    }
    if (line.length > 1) {
        updatedContent += line;
    }
    return updatedContent;
}

