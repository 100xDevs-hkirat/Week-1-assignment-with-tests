const fs = require("fs");

function writing_data(err){
    console.log("File written Successfully");
}
function file_read(err,content){
    let fileData = content;
    let ans = fileData.split(" ").filter(Boolean).join(" ");
    fs.writeFile("sample.txt",ans,"utf8",writing_data);
}

fs.readFile("sample.txt","utf8",file_read);