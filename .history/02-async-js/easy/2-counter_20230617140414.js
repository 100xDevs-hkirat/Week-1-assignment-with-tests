// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// Your counter should:
var counter = 0;
function count(){
    console.clear();
    counter = counter + 1;
    console.log(counter);
}
for(let i = 0; i < 10; i++){
setTimeout(count, 1000)
}




































































(Hint: setTimeout)