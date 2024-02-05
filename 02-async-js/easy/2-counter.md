## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 0;

function printAndIncreaseCount() {
    console.log(counter);
    counter += 1;
}

for (var i = 0; i <= 100; i += 1) {
    setTimeout(printAndIncreaseCount,(i+1)*1000);
}







































































(Hint: setTimeout)