const data = "Hey!! Let's write this data into file."
const fs = require("fs");
fs.appendFile('./dummy-file.txt', data , 'utf-8', (err) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log('Data written Successfuly!!');
})