let timer = () => {
  setTimeout(() => {
    let date = new Date();
    console.clear();
    let timeOfDay = date.getHours > 12 ? "pm" : "am";
    console.log(
      (date.getHours() % 12) +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " " +
        timeOfDay
    );
    timer();
  }, 1000);
};

timer();
