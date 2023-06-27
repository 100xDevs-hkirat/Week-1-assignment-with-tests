const fs = require('fs');


function fileOperation(err,content){
    if(err){
        console.log(err);
    }
    let intContent = parseInt(content);
    var sum = 0;
    for(var i=0;i<intContent;i++)
    {
        sum+=i;
    }
    console.log(sum);
}


fs.readFile('chocolate.txt','utf8',fileOperation);

for(var i=0;i<10000;i++){
    const sum =0;
}
console.log('Hello World');