const fs = require('fs');



fs.readFile("medium.txt" , 'utf-8' , (err, data)=>{
    if(err){
        console.log(err);
        return;

    }
    let cleanedData = clean(data)
    fs.writeFile("medium.txt" , cleanedData , 'utf-8' , (err ,data)=>{
        console.log("done!!!")
    })

})


function clean(data){
    var arr= data.split(" ");
    var answerArray=[];
    for(var i = 0; i<arr.length; i++){
        if(arr[i].length === 0 ){

        }else{
            answerArray.push(arr[i]);
        }
    }
    var answerString  =answerArray.join(" ");
    return answerString;


}