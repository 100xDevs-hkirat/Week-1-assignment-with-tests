function getCurrentTime() {
    const date = new Date();
  
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedTimeAMPM = date.toLocaleTimeString([], { hour12: true });
  
    console.log(`${formattedTime}`);
    console.log(`${formattedTimeAMPM}`);
  }
  
  setInterval(getCurrentTime, 1000);
  