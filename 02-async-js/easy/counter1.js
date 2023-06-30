let counter = 0;

function startCounter(){
    console.log(++counter);
}

setInterval(startCounter, 1000);