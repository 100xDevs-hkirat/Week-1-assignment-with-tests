let counter = 0;

function incrementCounter() {
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(incrementCounter, 1000);

}
setTimeout(incrementCounter, 1000);