fs=require('fs')

const filePath="write.txt"

let data="This is a file containing a collection of books."



fs.writeFile(filePath,data,"utf8",(err)=>{
    if(err)
        console.log("Error occured",err);

    else{
    
        console.log("File written successfully")
        console.log("Reading the written file we find");
        console.log(fs.readFileSync(filePath,"utf8"));

    }
    
})


console.log("Here before the file is written to")