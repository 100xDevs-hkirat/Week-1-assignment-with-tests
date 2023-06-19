
let t = 0;
function counter() {
    setTimeout(counter, 1000);
    console.log(++t);
}

counter();