const fs = require("fs");

let data = "This is the new line added to file."

fs.writeFile("./a.txt", data, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('data added to the new file. \n');
        console.log('updated file data: ');
        console.log(fs.readFileSync("./a.txt", "utf8"));
    }


})