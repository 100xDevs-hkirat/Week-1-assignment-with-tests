let counter = 1;

function stopWatch() {
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(stopWatch, 1000);
