//problem 1 - file cleaner

const fs = require('fs');

fs.readFile("medium-sample.txt", "utf-8", output);

function output(err, contents) {
    if (err) console.log(err);
    else {
        const cleanedStr = contents.trim().replace(/\s+/g, ' ');
        fs.writeFile("medium-sample.txt", cleanedStr, function () {
            console.log("writing in medium-sample.txt file is done");
        })
    }
}



//problem 2 - clock


// const times = currentTime.split(':');

function clock() {
    const todayDate = new Date();
    const hours = todayDate.getHours();
    const minutes = todayDate.getMinutes();
    const seconds = todayDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    process.stdout.write(`\r${formattedTime}`);
    setTimeout(clock, 1000);
}

clock();





