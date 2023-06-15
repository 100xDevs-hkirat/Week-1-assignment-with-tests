const fs = require('fs');
const path = require('path');

let data = "Thankyou Sir";

let file = path.join(__dirname, './Thankyou.txt'); // file path 

fs.writeFile(file , data , (err, data) => {
    if (err) {
        console.log(err);
    }
});