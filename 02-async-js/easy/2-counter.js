let counter = 1;

function counterCode() {
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(counterCode, 1000)
}

setTimeout(counterCode, 1000);