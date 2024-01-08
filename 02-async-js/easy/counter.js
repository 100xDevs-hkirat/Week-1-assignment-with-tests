var counter = 1;

function stopwatch(){
  console.clear();
  console.log(counter);
  counter= counter + 1;
}
setInterval(stopwatch, 1000);
