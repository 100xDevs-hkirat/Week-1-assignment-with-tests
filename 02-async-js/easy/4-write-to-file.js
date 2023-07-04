const fs = require("fs");

let content = "Hello Worldddddd";

fs.writeFile("a.txt", content,'utf-8', (err) => {
    if(err) console.log("error");
})