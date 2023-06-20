/* Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.*/

var counter = 0;
function stopWatch(){
  console.clear()
  counter += 1;
  console.log(counter);
  setTimeout(stopWatch,1000);
}
setTimeout(stopWatch,1000)