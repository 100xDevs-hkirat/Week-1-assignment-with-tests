function showTime() {
    let currDate = new Date()
    console.log(currDate.toLocaleTimeString())
    setTimeout(showTime, 1000)
}

showTime()
