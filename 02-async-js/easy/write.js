const fs = require('fs');

let data = "file has been witten.";

fs.writeFile('write.txt', data, 'utf8', function(err) {
    if(err) {
        console.error(err);
        return;
    }
    console.log("successfully wrote file");
});
