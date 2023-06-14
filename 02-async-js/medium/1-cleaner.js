const fs = require('fs')
fs.readFile('02-async-js/medium/dummy.txt','utf-8',(err,str)=>{
    if(err) throw err
    let output = ""
    let ind = 0;
    let temp = ""
    while(ind < str.length){
        if(str[ind] == " "){
            output += temp;
            output += " "
            temp = ""
            while(str[ind] == " "){
                ind++;
            }
        }
        temp += str[ind]
        ind++;
    }
    if(temp.length > 0){
        output += temp;
    }
    fs.writeFile('02-async-js/medium/dummy.txt',output,(err)=>{
        if(err) throw err
        console.log("done")
    })
})