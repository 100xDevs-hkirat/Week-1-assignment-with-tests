let count = 1;
function setCounter(){
    console.log(count++);
}

setInterval(setCounter, 1000);