showClockWithSetInterval = () => {
  setInterval(() => {
    console.clear();
    let date = new Date();
    let options = { hour12: false };
    console.log(date.toLocaleTimeString('en-IN', options));
    console.log(date.toLocaleTimeString());
  }, 1000);
};

showClockWithSetInterval();
