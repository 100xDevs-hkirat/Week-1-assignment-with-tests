
const fs = require('fs');

let content = "hi there!";
// fs.readFile('./4-write-to-file.md', 'utf-8', (error, data) => {
//     if (error)
//         console.log(error)
//     else {

//         content = data + " i am writing contents into the file";
//         console.log(data);
//     }
// })

fs.writeFileSync('4-write-to-file.md', content, 'utf-8', (err, data) => {

    if (err)
        console.log(err);
    else
        console.log(data)

})