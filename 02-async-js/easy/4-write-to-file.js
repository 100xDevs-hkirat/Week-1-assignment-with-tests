const fs = require('fs');

fs.writeFile('./sampleText.txt', 'Hello Again Let"s see how this one goes', (err) => {
    if(err) {
        console.error(err);
    }
    console.log("Written Successfully!");
})