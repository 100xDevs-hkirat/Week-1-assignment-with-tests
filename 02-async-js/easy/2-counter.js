function counter() {
    console.log(n++);
    setTimeout(counter, 1000);
}
let n = 1;

counter();