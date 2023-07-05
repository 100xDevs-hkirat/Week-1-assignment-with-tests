const fs = require("fs");

const data = "This is how we write data"

fs.writeFile('a.txt', data, 'utf8', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Your file has been written");
})