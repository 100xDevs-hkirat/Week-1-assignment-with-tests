//Importing the FS (File System) module
const fs = require("fs");

//Here err stands for the error which may arise
function file_data(err,contents){
    console.log(contents);
}

//.readFile is a function in FS module
fs.readFile("sample.txt","utf8",file_data);
let data = "My full name is Shashwat Pratap Singh";

function writig_data(err){
    console.log("File written Successfully");
}

//.writeFile is a function in FS module
fs.writeFile("sample.txt",data,"utf8",writig_data);
