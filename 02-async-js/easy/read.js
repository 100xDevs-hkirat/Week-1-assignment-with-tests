var fs = require('fs');

fs.readFile("sample.html", "utf8", (err,data) =>{
    if (err){
        console.error("error reading the file",err);
        return;
    }
    setTimeout(() => { console.log(data);}, 1000);
})

let counter = 0

function ctr(){
    while (counter < 100000000) {
        counter += 1;
    }
    console.log("Finished counting:", counter);
};

ctr()