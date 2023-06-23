## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




let counter = 0;

function increaseByOne() {
  console.clear();
  console.log(counter);
  counter = counter + 1;
  setTimeout(increaseByOne, 1000);
}
increaseByOne();



































































(Hint: setTimeout)
