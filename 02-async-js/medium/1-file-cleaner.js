const fs = require('fs');

fs.readFile('sample.txt','utf-8',(err,content)=>{
    if(err){
        console.log(err);
    }
    let cleanContent = content.replace(/\s+/g,' ');
    fs.writeFile('sample.txt',cleanContent,'utf-8',(err)=>{
        if(err){
            console.log(err);
        }

        console.log("All the spaces from the file is successfully removed.");
    })
});
