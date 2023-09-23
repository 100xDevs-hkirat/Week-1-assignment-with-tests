function printTime() {
    const now = new Date();
    console.clear();

    const time1 = now.toLocaleTimeString('en-US', { hour12: false });
    console.log(time1)

    const time2 = now.toLocaleTimeString('en-US', { hour12: true });
    console.log(time2)
}


setInterval(printTime, 1000)