var counter = 0;
function printAndIncreaseCount(){
    console.clear()
    console.log(counter)
    counter = counter + 1;  
}
setInterval(printAndIncreaseCount, 1000)