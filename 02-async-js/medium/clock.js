function counterFunc() {
    console.clear();
    let currentTime = new Date().toTimeString().slice(0,8)
    if (parseInt(currentTime.slice(0,2)) > 1 && parseInt(currentTime.slice(0,2)) < 12 ) {
        console.log(`${currentTime} AM`);
    } else {
        console.log(`${currentTime} PM`);
    }
}

setInterval(counterFunc, 1000);