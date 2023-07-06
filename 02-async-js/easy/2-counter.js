let ctr = 1

function counter() {
    setTimeout(counter, 1000)
    console.clear()
    console.log(ctr++);
}

setTimeout(counter, 1000)
