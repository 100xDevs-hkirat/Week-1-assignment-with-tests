let counter = (n) => {
    for(var i = 0; i < n; i++) {
        let time = i;
        setTimeout(() => console.log(time), i * 1000);
    }
}

counter(10);