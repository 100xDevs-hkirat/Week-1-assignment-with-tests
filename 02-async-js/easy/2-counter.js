let counter = 1;

function Print() {
    console.clear();
    console.log(counter++)
}
function Counter() {
    Print();
    setTimeout(Counter, 1000);
}

Counter();