var counter = 0;

function stopWatch(){
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(stopWatch,1000);