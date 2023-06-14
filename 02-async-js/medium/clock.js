
// clock normal without am pm format
function clock() {

    setInterval(() => {
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        console.log(`${hours}: ${minutes}: ${seconds}`)
    }, 1000)
}

// clock()

// clock in 12 hours indian time zone with am pm format.
function clock2() {

    setInterval(() => {
        const now = new Date().toLocaleTimeString('en-IN', { timeZone: "Asia/Kolkata", hour12: true })
        console.log(now)
    }, 1000)
}

clock2()