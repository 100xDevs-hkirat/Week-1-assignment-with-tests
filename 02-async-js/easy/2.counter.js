var counter = 0;

function stopWatch(){
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(stopWatch,1000);
}

setTimeout(counter,1000);