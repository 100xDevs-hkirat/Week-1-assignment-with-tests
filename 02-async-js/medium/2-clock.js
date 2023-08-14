// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
const counter = () => { 
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hour}::${minutes}::${seconds}`
    console.log(time);
    setTimeout(counter, 1000)
}

const counter2 = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour%12;
    let time = `${hour}::${minutes}::${seconds}  ${ampm}`
    console.log(time);
    setTimeout(counter2, 1000)
}

counter2();