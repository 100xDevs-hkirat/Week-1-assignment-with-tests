// ## Counter without setInterval


let counter = 0;

function count() {
    console.clear()
    counter = counter + 1;
    console.log(counter);
    setTimeout(count, 1000);
}


function start(){
    count();
}

start();
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































// (Hint: setTimeout)