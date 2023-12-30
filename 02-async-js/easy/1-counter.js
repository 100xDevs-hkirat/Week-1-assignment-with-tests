var counter = 0;
function print(){
    console.clear();
    console.log(counter);
    counter += 1;
}

setInterval(print, 1000);