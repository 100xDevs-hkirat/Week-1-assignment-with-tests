const fs = require("fs")

fs.readFile("1-file-cleaner.md", "utf8" , (e,data) => {
    if(e) return console.log("error Occured While Reading") ;
    const cleanedData =  data.replace(/\s+/g,' ').trim() ;

    fs.writeFile("1-file-cleaner.md", cleanedData , () => console.log("writt3en in file"))
})
