/**
 * Code a up counter without using setInterval
 * We will use setTimeout and use functions calling each
 * other to simulate setInterval
 * 
 * note - run this in louper and see what shows up !!
 */
let counter = 1;
function printCounter() {
    console.clear();
    console.log(counter);
    counter++;
    runCounter();
}

function runCounter() {
    setTimeout(printCounter, 1000);
}

runCounter();