
function getCurrentTime(){
    const today = new Date();
    process.stdout.write('\x1B[2J\x1B[0f');
    console.log(today.getHours() + ":"+today.getMinutes() + ":"+today.getSeconds());
}
setInterval(getCurrentTime, 1000);