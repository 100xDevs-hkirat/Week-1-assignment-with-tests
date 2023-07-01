const fs = require("fs");


fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    let val = data.split(" ")
        .filter((data, ind) => {
            return !(data.length == 0);
        })
        .join(" ");

    fs.writeFile('a.txt', val, 'utf8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Your file has been written");
    })
})
