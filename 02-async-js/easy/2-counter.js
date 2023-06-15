// counter using set timeout

let count = 0;

function counter() {
    console.log(count)
    count++;
    setTimeout(() => {
        counter()
    }, 1000);
}

setTimeout(() => {
    counter()
}, 1000);

// infinite counter
// use CTRL + C to stop the process