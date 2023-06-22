## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



var counter=0;

function seetcounter(){
    console.clear();
    console.log(counter);
    counter+=1;
    return setTimeout(seetcounter,1000);
}

setTimeout(seetcounter,1000);




































































(Hint: setTimeout)
