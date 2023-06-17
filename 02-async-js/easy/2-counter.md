// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->




var x=0;
function counter(){
    console.clear()
    console.log(x);
  ++x;
  if (x<100) {
    setTimeout(counter,1000);
  }
}
counter();

























