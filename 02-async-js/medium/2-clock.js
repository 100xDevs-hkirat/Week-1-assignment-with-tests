function counter() {
    let n = new Date();
    let hour = n.getHours();
    let minute = n.getMinutes();
    let second = n.getSeconds();
    let meredian = 'AM'

    if (hour >= 12) {
        meredian = 'PM';
    }
    if (hour === 24) {
        hour = 0;
    }
    if (hour>12) {
        hour-=12;
    } 
    console.log(`${hour}:${minute}:${second} ${meredian}`)
}
let n = 1;
setInterval(counter,1000);

