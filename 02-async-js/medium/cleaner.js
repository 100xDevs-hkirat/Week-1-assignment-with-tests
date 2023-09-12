var fs = require("fs")

fs.readFile("sample.txt", "utf8", (err,data) =>{
    if (err){
        console.error("error reading the file",err);
        return;
    }
    console.log(data);
    const fixed = data.replace(/\s+/g, " ");

    fs.writeFile("sample.txt", fixed, (err) =>{
        if (err){
            console.error("error reading the file",err);
            return;
        }
        console.log("file written successfully");

        fs.readFile("sample.txt", "utf8", (err,data)=> {
            if (err) {
                console.error("error reading the file", err);
                return;
            }

            console.log("File contents after writing:");
            console.log(data);

        });
    })

})

