var counter = 0;

function count(){
    counter = counter + 1;
    console.clear();
    console.log(counter);
    setTimeout(count, 1000);
}

setTimeout(count, 1000);