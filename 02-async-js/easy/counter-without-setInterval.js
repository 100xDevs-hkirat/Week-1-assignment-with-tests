//Counter (rate:1 sec)

var counter = 0;

function printCounter(){
    console.clear()
    counter = counter +1;
    console.log(counter);
    
    setTimeout(printCounter, 1000)
}

printCounter()