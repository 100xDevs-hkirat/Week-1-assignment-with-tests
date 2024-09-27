const fs = require('fs');


fs.readFile('./file.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

let n = 10000000000, sum = 0;//change value of n
for(let i=0;i<n;i++){
    sum += i;
}
console.log(sum);