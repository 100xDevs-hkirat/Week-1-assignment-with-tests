const fs=require("fs");

function removeExtraSpaces(str){
    let s="";
    str=str.trim();
    let spaceCount=0;
    for(let i=0;i<str.length;i++){
        if(str[i]!=' '){
            s+=str[i];
            spaceCount=0;
        }
        else{
            if(spaceCount===0){
                spaceCount++;
                s+=str[i];
            }
        }
    }
    return s;
}

fs.readFile("fileToBeCleaned.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        let str=data;
        str=removeExtraSpaces(str);
        fs.writeFile("fileToBeCleaned.txt",str,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("file cleaned");
            }
        });
    }
});