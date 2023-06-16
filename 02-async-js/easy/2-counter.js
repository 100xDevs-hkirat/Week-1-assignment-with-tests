var i =0;
var counter = function (){
    console.clear()
    i++
    console.log(i)
  setTimeout(counter, 1000);
}
setTimeout(counter, 1000);