function counter(n = Infinity) {
    let count = 0;
    const id = setInterval(() => {
        const date = new Date();
        let hoursIn24 = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let hoursIn12 = hoursIn24 % 12;
        let amOrpm = hoursIn24 < 12 ? "AM" : "PM";
        console.log(`${hoursIn24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}        ${hoursIn12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${amOrpm}`);

        if (count >= n) {
            clearInterval(id);
        }
        count++;
    }, 1000)
}

counter();
//line 10:: to print 2 digits instead of 1. for ex 1 -> 01, 6 -> 06