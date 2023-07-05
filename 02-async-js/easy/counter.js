var counter =1;

function printcounter(){
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(printcounter,1000);