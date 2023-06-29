const fs = require("fs");
let arr = []

function refineText(data){
    let refinedArr = []
    let arr = data.split(" ")
    for(let i=0; i<arr.length;i++){
        if(arr[i] != '' ){
            refinedArr.push(arr[i]);
            refinedArr.push(" ");
        }
    }
    let refinedStr = refinedArr.join("");
    fs.writeFile("text.txt", refinedStr, (err) =>{
        console.log("Text refined.")
    })
}


fs.readFile("text.txt","utf8",(err, data) => {
    let ans = refineText(data)
})