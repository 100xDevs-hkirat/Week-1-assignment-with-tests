setInterval( () => {
    var time = new Date();
    var currentTime = time.getHours() +"::" + time.getMinutes() + "::" + time.getSeconds()
    console.log(currentTime)
},1000)
