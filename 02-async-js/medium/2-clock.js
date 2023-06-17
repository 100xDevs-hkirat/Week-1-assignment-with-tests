// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)
function twentyfourhourformat() {
    const date = new Date()
    const hour = date.getHours();
    const min = date.getMinutes();
    const second = date.getSeconds();
    let final = `${hour}:${min}:${second}`;
    return final;
}


//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function twelvehourformat() {
    const date = new Date();
    const final = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    return final;
}

function display() {
    console.clear();
    let first = twentyfourhourformat();
    let second = twelvehourformat();
    let look = `${first} :: ${second}`;
    console.log(look);
}

setInterval(display, 1000);
