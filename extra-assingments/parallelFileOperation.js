const fs = require('fs');

function parallelFileOperation() {

    var ans = []
    var count = 0; 

    function readCallback(err, data) {
        if (err) {
            throw err;
        }
        ans[0] = data;
    }
    function writeCallback(err) {
        if (err) {
            ans[1] = 0;
        }
        else {
            ans[1] = 1;
        }
    }

    fs.readFile('a.txt', 'utf-8', callbackFn);
    
    fs.writeFile('b.txt', 'Hello', 'utf-8', writeCallback);
    // assert : ans.length === 2 & ans[0] == CONTENTS OF THE FILE
    //                             ans[1] === OR 1 BASED ON THE CONDITION   
    return ans;
}

console.log(parallelFileOperation());