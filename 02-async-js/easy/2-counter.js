// Counter to count every second without using set interval

var value = 0;
function count() {
    console.clear();
    value = value + 1;
    console.log(value);
    setTimeout(count, 1000);
}

count();
