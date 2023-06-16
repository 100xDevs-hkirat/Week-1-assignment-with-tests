
const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        let newString = data.replace(/[ ]/g, '');
        console.log(newString);

        fs.writeFile('input.txt', newString, 'utf-8', (err, data) => {
            if (err)
                console.log(err)
            else
                console.log(data);
        })

    }

})