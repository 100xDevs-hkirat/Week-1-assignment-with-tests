function clock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let amPm = '';
  
    if (hours > 12) {
      hours -= 12;
      amPm = 'PM';
    } else {
      amPm = 'AM';
    }
  
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
  
    const time24HourFormat = `${hours}:${minutes}:${seconds}`;
    const time12HourFormat = `${hours}:${minutes}:${seconds} ${amPm}`;
  
    console.log('24-Hour Format:', time24HourFormat);
    console.log('12-Hour Format:', time12HourFormat);
  }
  
  setInterval(clock, 1000);
  