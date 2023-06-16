const fs = require('fs')

fs.readFile('02-async-js/easy/dummy.txt','utf-8',(err,out)=>{
    if(err) throw err
    console.log(out)
})