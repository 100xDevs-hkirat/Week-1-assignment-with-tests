const fs = require("fs");

let data = null;

fs.readFile("./a.txt", "utf-8", (err, content) => {
    if(err) {
        console.log('error in reading file.', err);
    } else {
        content = content.trim().split(" ").filter((el) => el.length !== 0).join(" ");
        fs.writeFile("./a.txt", content, (err) => {
            if(err) console.log('error in writing file.', err)
        });
    }
})