let cnt = 1;

async function counter() {
    setTimeout(async () => {
        console.log(cnt);
        cnt++;  
        counter();
    }, 1000)
    
}

counter();