## Create a counter in JavaScript

var num = 1;
function counter() {
num += 1;
console.clear();
console.log(num);
}

setInterval(counter, 1000)
