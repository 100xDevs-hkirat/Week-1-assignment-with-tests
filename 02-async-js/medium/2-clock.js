
function printTime() {

    const time = new Date;
    let res = "";
    res += time.getHours() + ":";
    res += time.getMinutes() + ":";
    res += time.getSeconds();

    console.clear();
    console.log(res);
}

function printTime2() {
    const time = new Date();

    const hr = time.getHours();

    const res = ((hr < 12) ? hr : hr - 12) + ":" + time.getMinutes() + ":" + time.getSeconds() + ((hr < 12) ? " AM" : " PM");

    console.log(res);

}

setInterval(printTime2, 1000);