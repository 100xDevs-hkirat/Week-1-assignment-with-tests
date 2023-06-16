const fs = require('fs');
const filePath = '02-async-js/easy/a.txt';

function readfile(err,data)
{
    console.log(data);
}
fs.readFile(filePath,'utf8',readfile);

var count=0;
for(let i=0;i<10000000000;i++)
{
    count=count+i;

}
console.log(count);