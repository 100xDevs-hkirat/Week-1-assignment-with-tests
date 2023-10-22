// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function printCounter() {
    console.log(counter);
    counter++;
    setTimeout(printCounter, 1000);
}

printCounter();





































































// (Hint: setTimeout)