/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
  const pr = new Promise(function(resolve){
    setTimeout(() => resolve(), seconds * 1000);
  })
  return pr;
}
function sum(x){
  var sum = 0;
  for (let i = 0; i < x; i++){
    sum += i;
  }
  console.log(sum);
}
sleep(5)
.then(function() {
  return sum(100000);
})