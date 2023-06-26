const fs = require('fs');
function cleanFile(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) { console.log("Error occured"); return; }
        else {
            let cleanedData = cleanData(data);
            fs.writeFile(path, cleanedData, 'utf8', (err) => {
                if (err) {
                    console.log("Error occured");
                    return;
                }
            });
        }
    });


}

function cleanData(data) {
    let cleaned = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== ' ') {
            cleaned += data[i];
        } else {
            if (cleaned[cleaned.length - 1] !== ' ') {
                cleaned += data[i];
            } else {
                continue;
            }
        }
    }
    cleaned = cleaned.trim();
    return cleaned;
}

cleanFile('./example.txt');