function counter() {
    let count = 0;
    setInterval(() => {
        console.clear();
        console.log(count)
        count++;
    }, 1000)
}

counter();