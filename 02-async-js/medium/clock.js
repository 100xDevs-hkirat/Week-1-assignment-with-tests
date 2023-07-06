const clock = () => {
  console.clear();
  let time = new Date();
  console.log(time.toLocaleTimeString('en-US', { hour12: true }));
  console.log(time.toLocaleTimeString('en-US', { hour12: false }));
};

setInterval(clock, 1000);
