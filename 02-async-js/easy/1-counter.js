let counter = 1;

function count(){
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(count, 1000)