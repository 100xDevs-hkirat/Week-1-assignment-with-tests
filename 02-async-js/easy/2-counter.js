// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;
function counterFunc() {
    counter++;
    console.log(counter)
    setTimeout(counterFunc, 1000)
}

setTimeout(counterFunc, 1000);