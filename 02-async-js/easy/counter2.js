function counter(n) {
    for (var i = 0; i <= n; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
}

counter(10);