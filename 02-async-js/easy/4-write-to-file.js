var fs = require("fs/promises");

async function  writeToFile(){

    const fileContent = await fs.readFile("02-async-js\\easy\\test1.txt","utf-8");
    await fs.writeFile("02-async-js\\easy\\testnew.txt",fileContent);
    /*fs.readFile("02-async-js\\easy\\test.txt","utf-8").then((data)=>{
        fs.writeFile("02-async-js\\easy\\testnew.txt",data);
    }
    ).catch((err)=>{
        console.log(err);
    })*/
}

writeToFile();
