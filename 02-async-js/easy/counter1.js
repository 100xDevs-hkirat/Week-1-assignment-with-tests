let time = 0;
let counter = () => {
    console.log(time);
    time++;
}

setInterval(counter, 1000);