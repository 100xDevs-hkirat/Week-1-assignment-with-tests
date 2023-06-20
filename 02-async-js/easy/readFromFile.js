const fs = require("fs")

fs.readFile("./a.txt", "utf8",(err, data) => console.log(data));