let counter = 0;

function startCounter(){
    counter++;
    console.log(counter);
    setTimeout(startCounter, 1000);
}

startCounter();