var counter=0
function stopwatch(){
    console.clear()
    counter++;
    console.log(counter)
}
setInterval(stopwatch,1000);