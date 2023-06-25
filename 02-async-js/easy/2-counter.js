var counter = 0;

function stopwatch() {
    console.clear();
    counter++;
    console.log(counter);
    setTimeout(stopwatch, 1000); // Call setTimeout again after 1 second
}

setTimeout(stopwatch, 1000);