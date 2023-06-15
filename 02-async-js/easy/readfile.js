
const fs = require('fs');
const filePath ='data.txt';
fs.readFile(filePath, 'utf8', (err, data) => {console.log(data)});
function expensiveop(){for(let i=0;i<100000000000000000;i++){}}
expensiveop();