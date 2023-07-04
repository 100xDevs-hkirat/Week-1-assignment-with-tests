const fs = require("fs");

fs.readFile("a.txt", {encoding : "utf-8"}, (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})

for (let i = 0; i < 100000000000; i++) {
   console.log(i);
}