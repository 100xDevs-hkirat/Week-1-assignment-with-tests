// counter using set Interval
let count = 0;

function counter() {
    console.log(count);
    count++;
}

setInterval(() => {
    counter();
}, 1000);

// infinite counter
// use CTRL + C to stop the process