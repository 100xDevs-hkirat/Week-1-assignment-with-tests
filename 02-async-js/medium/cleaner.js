const fs=require('fs');
fs.readFile("data.txt","utf-8",(err,data)=>{
    data=data.replaceAll('  ','');
    fs.writeFile("data.txt",data,(err)=>{
        if(err) throw err;
        console.log("The file has been cleaned!");
    });
});
