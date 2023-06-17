/* Using `1-counter.md` or `2-counter.md` from the easy section, Create a
clock that shows you the current machine time.

Make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM) */


 function getTime24(hours, minutes, seconds) {
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }
  
  
  
  function getTime12AmPm(hours, minutes, seconds) {
    if (hours > 11 && minutes > 59 && seconds > 59) {
      return (hours + ":" + minutes + ":" + seconds + "PM");
    }
  
    return (hours + ":" + minutes + ":" + seconds + "AM");
  }
  
  
  
  function clock(hours, minutes, seconds) {
    let now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    console.log(getTime12AmPm(hours, minutes, seconds));
    //console.log(getTime24(hours, minutes, seconds));
  }
  
  
  setInterval(clock, 1000);
  