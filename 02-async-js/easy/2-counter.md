## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 1;

function inscreaseCount() {
console.clear()
console.log(counter)
counter += 1
setTimeout(inscreaseCount, 1000)
}

setTimeout(inscreaseCount, 1000)

(Hint: setTimeout)
