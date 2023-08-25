const getTime = () => {
  console.clear();
  let time = new Date();

  console.log(
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "    "
  );

  if (time.getHours() >= 12)
    console.log(
      time.getHours() -
        12 +
        ":" +
        time.getMinutes() +
        ":" +
        time.getSeconds() +
        "PM"
    );
  else
    console.log(
      time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "AM"
    );
};

setInterval(getTime, 1000);
