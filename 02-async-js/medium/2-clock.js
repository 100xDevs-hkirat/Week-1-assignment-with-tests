// in HH:MM:SS (24 hour format)

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (`${hours}:${minutes}:${seconds}`)
}

// setInterval(() => {
//     console.clear();
//     console.log(clock());
// }, 1000);

// in HH:MM:SS AM/PM (12 hour format)
function clock2() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let str = '';

    if(hours > 12) {
        hours = hours - 12;
        str = 'PM';
    }
    else {
        if(hours === 0) {
            hours = 12;
        }
        str = 'AM';
    }
    return (`${hours}:${minutes}:${seconds} ${str}`)    
}

// setInterval(() => {
//     console.clear();
//     console.log(clock2());
// }, 1000);