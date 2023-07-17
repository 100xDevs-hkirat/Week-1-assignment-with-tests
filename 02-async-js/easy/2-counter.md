## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 1;

function printCounterValue() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(printCounterValue, 1000)
}

setTimeout(printCounterValue, 1000)







































































(Hint: setTimeout)