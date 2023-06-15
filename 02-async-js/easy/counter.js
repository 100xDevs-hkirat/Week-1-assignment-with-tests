let counter = 1;

function printCount() {
    console.clear()
    console.log(counter)
    counter++
}

setInterval(printCount, 1000)