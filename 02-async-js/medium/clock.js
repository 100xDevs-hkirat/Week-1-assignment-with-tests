
function clock(){
    var time= new Date();
    const hours=time.getHours();
    const minute=time.getMinutes();
    const second=time.getSeconds();
     console.clear()
    console.log(hours+":"+minute+":"+second);

}

setInterval(clock,1000);