const fs = require('fs');
const data = 'Hi i am tushar'
fs.writeFile('./easy/files/writeFile.txt', data, (err) => {
    if(err) {console.log(err);}
})