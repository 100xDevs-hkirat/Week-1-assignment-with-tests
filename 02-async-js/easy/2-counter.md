## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



var counter = 1;
function counterf(){

    console.clear();
    console.log(counter++);
    setTimeout(counterf,1000);

}

counterf();





































































(Hint: setTimeout)