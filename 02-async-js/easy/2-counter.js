// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


var i=0;
function counter(){
    i++;
    console.log(i);
    setTimeout(counter, 1000);
}
counter();





































































// (Hint: setTimeout)