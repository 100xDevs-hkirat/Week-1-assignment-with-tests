var fs = require('fs');
fs.readFile('./sampleFile.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
    function cleanData(data){
        var arr = data.split(" ").filter(x => x != '');
        var newData = arr.join(" ");
        return newData;
    };
    
    const writeData = cleanData(data)
fs.writeFile('./sampleFile.txt', writeData, 'utf-8', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Data written Successfully");
});
});
