
//counter with setInterval
function counterIncrement() {
    let counter = 0
    setInterval(() => {
        counter += 1
        console.log(counter)
    }, 1000)
}

//counter without setInterval
function counter(n) {
    console.log(n)
    if (n > 0) {
        setTimeout(() => {
            counter(n - 1)
        }, 1000)
    }
}

counterIncrement()
// counter(10)