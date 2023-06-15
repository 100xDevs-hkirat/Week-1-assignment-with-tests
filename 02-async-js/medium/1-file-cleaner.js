const fs = require('fs');

function removeSpace(data){
    dt = data.split(' ');
    s=[];
    dt.forEach(e => {
        if(e!=='')
            s.push(e);
    });
    return s.join(' ');
}

fs.readFile('1-file-cleaner.md', (err,data) => {
    if(err) throw new Error;
    b=removeSpace(data.toString());
    fs.writeFile('1-file-cleaner.md',b , function(err){
        if(err) throw err;
    });
})