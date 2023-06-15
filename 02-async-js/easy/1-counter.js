function counter(){
    let count=1;
    function cnt(){
        console.log(count++);
    }
    setInterval(cnt,1000)
}