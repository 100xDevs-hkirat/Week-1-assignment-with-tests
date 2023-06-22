## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



var c = 0;
function counter() {
  console.clear();
  c+=1
  console.log(c);
  setTimeout(counter,1000);
}

setTimeout(counter,1000);




































































(Hint: setTimeout)