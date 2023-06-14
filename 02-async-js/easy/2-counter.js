let count = 0;
function recursiveCounter() {
    console.log(count++);
    setTimeout(recursiveCounter, 1000)
}

recursiveCounter();