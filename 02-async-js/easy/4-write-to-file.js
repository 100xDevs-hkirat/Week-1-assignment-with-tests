const fs = require('fs');

let data = "hello all";
fs.writeFile("./a.txt", data, () => {
    console.log("File Updated Successfully");
});