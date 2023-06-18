function showTime(){
    console.clear()
    let currentTime = new Date()
    let timePeriod = currentTime.getHours()<=12 ? "AM":"PM"
    console.log(currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds()+" "+ timePeriod)
}
setInterval(showTime, 1000);