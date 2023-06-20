function timerFun()
{
    sec++;
    console.clear()
    console.log(sec);
}

var sec = 0;
setInterval(timerFun,1000)

