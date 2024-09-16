class Clock {
    constructor() {
      this.printTime();
      this.updateTime();
    }
  
    printTime() {
      let currDate = new Date();
      let hours = currDate.getHours();
      let hours12 = hours > 12 ? hours - 12 : hours;
      let min = currDate.getMinutes().toString().padStart(2, '0');
      let sec = currDate.getSeconds().toString().padStart(2, '0');
  
      console.log(`${hours.toString().padStart(2, '0')}:${min}:${sec}`);
      console.log(`${hours12.toString().padStart(2, '0')}:${min}:${sec} ${hours >= 12 ? "PM" : "AM"}`);
    }
  
    updateTime() {
      setInterval(() => {
        this.printTime();
      }, 1000);
    }
  }
  
  function startClockAt00Seconds() {
    setTimeout(() => {
      new Clock();
    }, 1000 - new Date().getMilliseconds());
  }
  
  startClockAt00Seconds();
  