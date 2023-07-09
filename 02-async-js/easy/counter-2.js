var counter =0

function CountIncrement(){
  counter ++;
 console.clear()
 console.log(counter)
  setTimeout(CountIncrement,1000)
}
setTimeout(CountIncrement,1000)