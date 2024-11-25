
class Clock{
    constructor() {
        let currDate = new Date();
        this.seconds = currDate.getSeconds();
        this.minutes = currDate.getMinutes();
        this.hours = currDate.getHours();
        this.hours12 = currDate.getHours() - 12;
        this.AMorPM = this.hours >= 12 ? "PM" : "AM";
        this.printTime();
        this.updateTime();
    }
    printTime() {
        console.clear();
        let hours = this.hours.toString().padStart(2, '0');
        let hours12 = this.hours12.toString().padStart(2, '0');
        let min = this.minutes.toString().padStart(2, '0');
        let sec = this.seconds.toString().padStart(2, '0');
        console.log(`${hours}:${min}:${sec}`);
        console.log(`${hours12}:${min}:${sec} ${this.AMorPM}`)
    }
    updateTime() {
        setInterval(() => {
            this.seconds = (this.seconds + 1) % 60;
            if (this.seconds == 0) {
                this.minutes = (this.minutes + 1) % 60;
            }
            if (this.minutes == 0) {
                this.hours = (this.hours + 1) % 24;
                this.hours12 = this.hours - 12;
            }
            this.printTime();
        }, 1000)
    }
}
function startClockAt00Seconds() {
    setTimeout(() => {
        new Clock();
    }, 1000-new Date().getMilliseconds())
}

startClockAt00Seconds();

