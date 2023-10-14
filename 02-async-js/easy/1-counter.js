var counter = 1;

function increaseCount(){
    console.clear();
    counter += 1;
    console.log(counter);
}

setInterval(increaseCount, 1000);