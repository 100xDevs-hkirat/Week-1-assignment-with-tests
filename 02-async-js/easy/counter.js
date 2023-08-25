
let counter =0;

function printCounter(){
    console.clear();
    counter = counter + 1;
    console.log(counter);
}

setInterval(printCounter, 1000);