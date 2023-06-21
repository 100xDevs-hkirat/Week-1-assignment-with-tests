// Counter to count every second

var value = 0;
function count() {
    console.clear();
    value = value + 1;
    console.log(value);
}

setInterval(count, 1000);