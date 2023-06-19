function clock() { 
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours%=12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    console.log(time);
}

setInterval(clock, 1000);

