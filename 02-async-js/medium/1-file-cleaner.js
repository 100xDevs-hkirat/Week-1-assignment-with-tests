const { log } = require('console');
const fs = require('fs');

fs.readFile('./cleanedFile.txt', 'utf8', (err, data) => {
    if (!err) {
        let updatedData = "";
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i] === " ") {
                if (data[i + 1] !== " ") {
                    updatedData = updatedData + data[i];
                } else {
                    continue;
                }
            } else {
                updatedData = updatedData + data[i];
            }
        }

        fs.writeFile("./cleanedFile.txt", updatedData, () => {
            console.log("File Cleaned Successfully");
        });
    }
});