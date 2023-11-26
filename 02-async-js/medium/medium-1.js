const fs = require('fs');
let text;
let str = "";
let check = true;
function printData(err,data){
    if(err){
        console.log(err);
    }
    text = data;
    for(let i = 0;i<text.length;i++){
        if(text[i] === ' ' && check === true){
            str+=' ';
            check = false;
        }
        else
        if(text[i] !== ' '){
            str+=text[i];
            check = true;
        }
    }
    fs.writeFile('02-async-js/medium/removeSpace.txt',str,(err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Data has been written to the file successfully!');
        }
    });
}
fs.readFile('02-async-js/medium/removeSpace.txt','utf-8',printData);

