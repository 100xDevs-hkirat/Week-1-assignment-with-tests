## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let n=1;
function counter(){
  console.clear();
  console.log(n);
  n+=1;
}
setInterval(counter, 1000);
