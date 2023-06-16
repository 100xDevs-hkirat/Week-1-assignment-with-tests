
let count = 1;

function counter(){
    console.log(count);
    count++;
    callSetTimeOut();
}

function callSetTimeOut(){
    setTimeout(counter, 1000);
}

counter();