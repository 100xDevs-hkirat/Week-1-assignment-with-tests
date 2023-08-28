let fs = require('fs');

let str="";
fs.readFile('D:\\Programming\\Harkirat\\Week-1-assignment-with-tests\\02-async-js\\medium\\1-fileClener.txt',
'utf-8', (err, data)=>{
    if(err)
        console.log(err);
    else{
        str=data;
        str = str.replace(/\s+/g, " ");
        // console.log(str);

        fs.writeFile('D:\\Programming\\Harkirat\\Week-1-assignment-with-tests\\02-async-js\\medium\\1-fileClener.txt',
            str, (err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log("successfull");
                }
            })
    }
})
