var count = 1;

function counter() {
    console.log(count);
    setTimeout(counter, 1000);
    count++;
}
counter();