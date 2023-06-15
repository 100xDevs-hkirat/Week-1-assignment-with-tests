let counter = 0;

function increment() {
    counter += 1
    console.log(counter)
}

setInterval(increment, 1000)