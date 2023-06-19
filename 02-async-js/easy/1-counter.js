function counter(){
    let time = 0
    setInterval(()=>{
        console.clear()
        time = time +1
        console.log(time)
    },1000)
}

counter()