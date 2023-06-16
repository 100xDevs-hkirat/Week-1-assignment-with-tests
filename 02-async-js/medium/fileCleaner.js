const fs=require('fs');


function cleanData(val){
    const temp=val.split(" ");
    var temp1=[];
    for(var i=0;i<temp.length;i++){
    if(temp[i].length >0)
    temp1.push(temp[i]);
    }

    return temp1.join(" ");
}

function writeFile(err){
    if(err){
        console.error(err);
    }
   console.log("value write successful");
}


function readFile(err,data){
     if(err){
        console.error(err);
     }
     console.log(data);
     
     console.log('value read successful')
     let clean=cleanData(data);
    console.log(clean);
     fs.writeFile('./temp1.txt',clean,'utf-8',writeFile);
    
}

fs.readFile('./temp1.txt','utf-8',readFile);




