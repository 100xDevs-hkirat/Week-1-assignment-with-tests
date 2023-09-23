let counter = 1;
function printAndIncrement() {
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(printAndIncrement, 1000)
}

printAndIncrement();







