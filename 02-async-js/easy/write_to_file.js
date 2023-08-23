const fs = require('fs/promises')


function writeFileAsync(data) { 
    fs.writeFile('./02-async-js/easy/write_file.txt', data).then(()=>{
        console.log("Wrote successfully")
    }).catch(err => {
        console.log("Error",err);
        throw err;
    })
}

console.log("Starting...")
writeFileAsync("Hello World!!!")
console.log("Ending...")