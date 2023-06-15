var counter = 1
function printNumbers(counter) {
    console.clear()
    console.log(counter)
    setTimeout(() => printNumbers(counter + 1), 1000)
}

printNumbers(counter)