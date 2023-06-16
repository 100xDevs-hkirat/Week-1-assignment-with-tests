// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function Counter(y){
    console.clear();
    console.log(y);
    setTimeout(Counter,1000,y+1);
}

Counter(1);




































































// (Hint: setTimeout)