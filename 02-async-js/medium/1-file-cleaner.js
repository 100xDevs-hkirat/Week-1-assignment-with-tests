const fs = require('fs');
let cleanFile = (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        let trimData = data.replace(/\s+/g, ' ');
        console.log(trimData)

    }

}
fs.readFile("1-file-cleaner.md", "utf-8", cleanFile)
