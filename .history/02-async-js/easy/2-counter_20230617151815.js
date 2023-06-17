// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// Your counter should:
var counter = 0;
function count(){
    console.clear();
    console.log(counter);
    counter = counter + 1;
    setTimeout(count, i * 1000)

}

setTimeout(count, i * 1000)





































































//(Hint: setTimeout)