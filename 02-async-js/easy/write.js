var fs = require('fs');

const content = "New content"

fs.writeFile("sample.html", content, (err) =>{
    if (err){
        console.error("error reading the file",err);
        return;
    }
    console.log("file written successfully");
})

let counter = 0

function ctr(){
    while (counter < 100000000) {
        counter += 1;
    }
    console.log("Finished counting:", counter);
};

ctr()