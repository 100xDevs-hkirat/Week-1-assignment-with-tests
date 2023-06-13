setIntervalCounter = (count = 0) => {
  setInterval(() => {
    console.clear();
    let date = new Date();
    let hr12;
    if (date.getHours() > 11) {
    }
    let options = { hour12: false };
    console.log(date.toLocaleTimeString("en-IN", options));
    console.log(date.toLocaleTimeString());
    count++;
  }, 1000);
};

setIntervalCounter();

module.exports = { setIntervalCounter };
