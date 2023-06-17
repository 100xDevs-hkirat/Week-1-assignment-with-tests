const fs = require('fs');
function clean(){
    fs.readFile('testFile.txt',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }

        let res = data.toString().split(' ').filter(x=>x!=='').join(' ');
        console.log(res);
    })
}

clean();