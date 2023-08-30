function currentTime() {
    let currentDate = new Date();
    const ans = currentDate.getHours() +":"+ currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(ans);
}
function printTime() {
    console.clear();
    currentTime();
}
setInterval(printTime, 1000);