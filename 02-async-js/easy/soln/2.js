var count = 0;

// create a timer using setTimeout

function timer() {
    setTimeout(() => {
        console.clear()
        console.log(count++);
        timer();
    }, 1 * 1000);
}

timer();
