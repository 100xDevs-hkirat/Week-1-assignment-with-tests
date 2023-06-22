const fs=require('fs');
//let str="";
fs.readFile('file-cleaner.txt','utf-8',readFile);
function readFile(err,data){
    if(err){
        console.log(err);
        return;
    }else{
        let ModifiedString=data.split("  ").filter((word)=>word!==" ").join(" ");
        console.log(ModifiedString);
        fs.writeFile('file-cleaner.txt',ModifiedString,fileWritten);

    }
}
 function fileWritten(err){
    console.log("done");
 }

// function cleaned(data){
//     var arr=data.split(" ");
//     var answer=[];
//     for(var i=0;i<arr.length;i++){
//         if(arr[i].length===0){

//         }else{
//             answer.push(arr[i]);
//         }

//     }
//     var answerString=answer.join(" ");
//     return answerString;
// }


