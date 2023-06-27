function counter(x){
    const count= setInterval(() => {
        if (x > 0) {
            console.log(x--);
        }else{
            clearInterval(count);
        }
    }, 1000);
}

counter(10)