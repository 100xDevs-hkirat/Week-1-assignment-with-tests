const events = require("events");
const fs = require("fs");
const readLine = require("readline");

async function lineByLine(){
    try{

    const rLine = readLine.createInterface({
        input:fs.createReadStream("02-async-js\\easy\\test.txt"),
        crlfDelay: Infinity
    });

    rLine.on('line',(rLineData)=>{
        console.log(rLineData.length);
        let newData = rLineData.replace(/\s+/g, ' ').trim() + "\n";
        
      //  throw Error("hi");
       fs.appendFile("02-async-js\\easy\\file-cleaner.txt",newData,(err)=>{
            if(err){
                throw Error(err);
            }
       });
    });

    await events.once(rLine, 'close');
}
catch(err){
    console.error(err);
}
}
lineByLine();