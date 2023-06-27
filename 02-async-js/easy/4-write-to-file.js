// writting the content in the file

const fs = require('fs');

data = "Hello my name is Gaurav and i wanted to be the 100x Developer."

fs.writeFile('writeContent.txt',data,'utf8',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('file is successfully print')
})