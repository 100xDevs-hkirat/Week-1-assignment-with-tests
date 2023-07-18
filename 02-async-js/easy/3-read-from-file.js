const fs  = require("fs");
function heavyOperation(n){
    let sum =0;
    for(i=0;i<n;i++)
    {
        sum= sum + i;
    }
    console.log(sum);
}

fs.readFile("./assignments/Week-1-assignment-with-tests/02-async-js/easy/a.txt","utf-8",(err,data) =>{
    if (err) throw err;
    console.log(data)
});

heavyOperation(100000000);

