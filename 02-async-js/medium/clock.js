
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ampm;
    if (hours >= 12) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    
    // Convert hours from 24-hour to 12-hour format and prepend 0 if needed
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
    // Prepend 0 to minutes and seconds if needed
    if (hours < 10) {
      hours = '0' + hours;
    }
  
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
  
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds + " " +  ampm;
    console.log(time);
  }
  
  function clock(){
    console.clear();
    printTime();
  }
  
  setInterval(clock, 1000);