
function printCurrentTime(){
    let data = new Date;
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  function printTime(){
    console.clear();
    printCurrentTime();
  }
  
  setInterval(printTime, 1000);