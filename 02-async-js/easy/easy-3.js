const fs = require('fs');

fs.readFile('02-async-js/easy/easy-1.js','utf8',function(err, data){
    if(err) {
        console.error(err);
        return;
    }
    console.log(data); 
});