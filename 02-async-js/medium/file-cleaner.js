const fs = require('fs')

fs.readFile('./temp.txt', 'utf8', (err,data) => {
    if(err){
        console.error(err);
        return;
    }
    let newData = processData(data);

    // Write cleaned up data back to the file
    fs.writeFile('./temp.txt', newData, err => {
        if (err) {
           console.error(err);
         }
       });
});

// Given a string, this function will remove all the extra spaces
function processData(data){
    let words = []; // collect all the words in this array
    data = data.trim();
    let i = 0;
    while(i < data.length){
        if(data.charAt(i) === ' ') i++;
        else{
            let j = i;
            while(j < data.length && data.charAt(j) !== ' '){
                j++;
            }
            words.push(data.substring(i,j));
            i = j;
        }
    }
    return words.join(' ');
}