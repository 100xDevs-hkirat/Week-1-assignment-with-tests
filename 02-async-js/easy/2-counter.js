var counter = 0;

function increaseCount(){
    console.clear();
    counter += 1;
    console.log(counter);
    setTimeout(increaseCount, 1000);
}

setTimeout(increaseCount, 1000);