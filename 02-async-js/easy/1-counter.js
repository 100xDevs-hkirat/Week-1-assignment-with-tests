let counter = 1;
function printAndIncrementCounter() {
    console.clear();
    console.log(counter);
    counter += 1;
}
setInterval(printAndIncrementCounter, 1000);