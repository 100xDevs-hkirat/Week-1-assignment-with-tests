## Counter without setInterval


var counter = 1;
function counterFn(){
  console.clear();
  console.log(counter);
  counter = counter + 1;
}

settimeout(counterFn , 1000)

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)