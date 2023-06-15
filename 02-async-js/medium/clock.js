setInterval(() => {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const formattedTime = now.toLocaleTimeString(undefined, options);

  //console.log(formattedTime);

  console.clear();
  console.log(formattedTime);
}, 1000);
