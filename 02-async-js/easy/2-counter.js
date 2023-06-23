// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let i = 0;
function counter() {
    i = i + 1;
    console.clear();
    console.log(i);
    setTimeout(counter, 1000);
}
  
setTimeout(counter, 1000);
   







































































// (Hint: setTimeout)