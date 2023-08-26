const fs = require('fs')

function peform_cleaning(data) {
    var x = data.split(" ");
    var ans=[]
    for(let i=0;i<x.length;i++) {
        if(x[i]!=='')
            ans.push(x[i])
    }
    ans=ans.join(" ");
    fs.writeFile('./02-async-js/medium/file.txt', ans, (err) => {
        if(err)
            console.error("Error Writing to file: ", err);
        else 
            console.log("Wrote Successfully");
    })
}

function func() {
    fs.readFile('./02-async-js/medium/file.txt', (err, data) => {
        if (err) throw err;

        peform_cleaning(data.toString());
    })
}

console.log("yoi")
func()
console.log("after")