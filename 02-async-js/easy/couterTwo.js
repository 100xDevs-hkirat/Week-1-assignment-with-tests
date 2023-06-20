function stopWatch()
{
    time++;
    console.clear()
    console.log(time)
    setTimeout(stopWatch,1000)
}
time=0;
stopWatch()