const fs = require('fs');

fs.readFile('./temp-file.txt','utf8', (err,data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);

    function clean(data){
        var arr = data.split(" ").filter(x => x!='');
        var newData = arr.join(" ");
        return newData;
    };

    const writeData = clean(data);

    fs.writeFile('./temp-file.txt', writeData, 'utf8', (err) => {
        if(err){
            console.error(err);
            return;
        }
        else{
            console.log("File has been written successfully!");
        }
    });
});