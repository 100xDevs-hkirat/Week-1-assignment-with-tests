setInterval(() => {
    console.clear();
    var currentDate = new Date();
    console.log(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
}, 1000)