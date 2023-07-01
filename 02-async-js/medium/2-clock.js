
function incrementCounter() {
    console.clear();
    let ts = new Date();
    hr = ts.getHours();
    min = ts.getMinutes();
    sec = ts.getSeconds();

    if (hr > 12) {
        hr = hr - 12;
        console.log(hr, ":", min, ":", sec," PM");
    }else{
        console.log(hr, ":", min, ":", sec," AM");
    }
    setTimeout(incrementCounter, 1000);

}
setTimeout(incrementCounter, 1000);