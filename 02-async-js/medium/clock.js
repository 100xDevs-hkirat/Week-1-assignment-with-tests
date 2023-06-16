function displayClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    let amPm = 'AM';
  
    // Convert hours to 12-hour format and determine AM/PM
    if (hours >= 12) {
      amPm = 'PM';
    }
  
    // Adjust midnight and noon
    if (hours === 0) {
      hours = 12;
    }
  
    const time = `${hours}:${minutes}:${seconds} ${amPm}`;
    console.log(time);
  }
  
  // Update the clock every second (1000 milliseconds)
  setInterval(displayClock, 1000);
  