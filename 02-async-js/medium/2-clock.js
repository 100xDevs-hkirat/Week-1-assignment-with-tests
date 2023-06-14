const currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
console.log("Time with Inbuild Fucntions");
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
console.log("printing time with Custom Function");
  function Counter(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        if(hours == 24){
            hours = 0;
        }
    }
    console.clear();
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
  }

  setInterval(Counter, 1000);
