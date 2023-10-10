setInterval(() => {
  console.clear();
  let time = new Date();
  var answer =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  console.log(answer);
}, 1000);
