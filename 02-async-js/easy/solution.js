
//problem 1 - 1-counter
var counter = 1;
function counter1() {
    console.log(counter);
    counter += 1;
}

setInterval(counter1, 1000);


//problem 2 - 2-counter


function count(numberOfSeconds) {
    var counter = 0;
    function increaseCounter() {
        counter += 1;
        console.log(counter);
        if (counter <= numberOfSeconds) setTimeout(increaseCounter, 1000);
    }

    increaseCounter();
}

count(100);

//problem 3 - read from file

const fs = require('fs')

fs.readFile("test.txt", "utf-8", readfile);

function readfile(err, contents) {
    if (err) console.log(err);
    else {
        var sum = 0;
        for (var i = 1; i <= contents; i++) {
            sum += i;
        }
        console.log(sum);
    }
}


//problem 4 - write to the file

fs.writeFile("test.txt", "10000", writefile)


function writefile() {
    console.log("writing over a file is completed you can now see the file");
}


