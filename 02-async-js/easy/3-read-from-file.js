const fs = require('fs');

fs.readFile('./sample-text.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

var counter = 0;
for(var i = 0; i < 10000000; i++){
    counter += 1;
}