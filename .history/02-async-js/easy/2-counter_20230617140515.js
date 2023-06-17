// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// Your counter should:
var counter = 0;
function count(){
    console.clear();
    console.log(counter);
    counter = counter + 1;
    
}

for(let i = 0; i < 10; i++){
setTimeout(count, (i+1) * 1000)
}




































































(Hint: setTimeout)