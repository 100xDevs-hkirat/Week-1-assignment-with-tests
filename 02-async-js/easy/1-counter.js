
/**
 * Up counter in js - keep incrementing by 1 automatically
 * at intervals of 1 sec
 */
let counter = 1;
function upCounter() {
    console.clear()
    console.log(counter);
    counter++;
}

setInterval(upCounter, 1000)