function giveCount(n){
    let count = 1
    const interval = setInterval(() => {
        console.log(count++);
        if(count == n+1){
            clearInterval(interval)
        }
    },1000)
}

giveCount(3)