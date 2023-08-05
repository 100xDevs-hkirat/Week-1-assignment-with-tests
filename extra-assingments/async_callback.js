function getDayOfMonth() {
    const date = new Date();
    // assert : date contains the current date information
    //          as a date object

    return date.getUTCDate();
}


function higherOrderAsync(callback) {
    setTimeout(callback, getDayOfMonth() * 1000);
}
console.log(getDayOfMonth());