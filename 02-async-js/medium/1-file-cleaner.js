const fs = require("fs")

let fileContent = fs.readFile("file.txt", "utf8", (err, data) => {
    if(err){
        console.log("Error");
        return;
    }
    let clean = (data) => {
        var arr = data.split(" ");
        var cleanedarr = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i].length != 0){
                cleanedarr.push(arr[i]);
            }
        }
        data = cleanedarr.join(" ");
        return data;
    };

    let cleanedData = clean(data);

    fs.writeFile("file.txt", cleanedData, "utf8", (err) => {
        if(err){
            console.log("Error");
            return;
        }
        console.log("Writing in the file Completed");
    })

    console.log("Task Completed");
}) 