function printTime() {
    var x = new Date();
    x = x.toString();
    x = x.split(" ");
    x = x[4];
    console.clear();
    console.log(x);
}

setInterval(printTime, 1000);