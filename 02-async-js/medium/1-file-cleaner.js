const fs = require('fs');
fs.readFile('text.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    const txt = data.split(" ").filter(item=>item!=='').join(' ');
    fs.writeFile('text.txt',txt,(error)=>{
        if(error){
            console.log(error);
        }
    })
    
})













