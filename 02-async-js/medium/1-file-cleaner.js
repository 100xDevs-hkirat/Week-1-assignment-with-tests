const fs = require('fs');

fs.readFile("/Users/aeon/Web-Dev/Week-1-assignment-with-tests/02-async-js/medium/text.txt",'utf8',(err,data) => {
    if (err){
        console.error(err);
    }
    var text=data.replace(/\s+/g,' ');
    console.log(text);

    fs.writeFile('/Users/aeon/Web-Dev/Week-1-assignment-with-tests/02-async-js/medium/text.txt',text,'utf8',(err)=>{
        if(err){
            console.error(err);
        }
    });
});

