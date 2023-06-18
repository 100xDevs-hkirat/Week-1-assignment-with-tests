
const readline = require('readline');
function showTime() {
    var time = new Date();

    // console.log(time);

    arr = time.toString().split(' ');
    // console.log(time.toString());
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    console.log(arr[4]);
}

setInterval(showTime, 1000);