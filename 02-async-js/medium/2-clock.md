Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

------------------------------------------------MyCodeBelow-------------------------------------------------

function printTime(){
let currentDate = new Date();
let hh = currentDate.getHours()
let period = 'AM'
if (hh > 12){
hh -= 12
period = 'PM'
}
let presentTime = `${hh} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()} ${period}`
console.clear()
console.log(presentTime)
}

setInterval(printTime, 1000)

------------------------------------------------MyCodeAbove---------------------------------------------------
