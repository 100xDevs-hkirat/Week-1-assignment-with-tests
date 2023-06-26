var counter = 0;

function increment() {
    counter++;
    console.log(counter);
    console.clear();
    setTimeout(increment, 1000);
}

// setTimeout(increment, 1000);

setInterval(function() {
    counter++;
    console.log(counter);
    console.clear();
}, 1000);
