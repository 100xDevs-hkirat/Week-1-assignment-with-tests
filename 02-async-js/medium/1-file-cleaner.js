var fs = require("fs")

fs.readFile("Data.txt", "utf-8", function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        let arr = data.split(" ").filter(function(d) {
            return d !== ""
        })
        
        fs.writeFile("Data.txt", arr.join(" "), function(err) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("File Updated...");
            }
        })

        console.log("Hello World after reading file");
    }
})

console.log("Hello World");