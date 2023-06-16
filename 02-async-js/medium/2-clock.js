function CurrentTime(){
    let currentdate = new Date()
    const answer = currentdate.getHours() + ":" + currentdate.getMinutes() + " : " + currentdate.getSeconds()
    console.log(answer);
}




function printTime(){
    console.clear();
    CurrentTime()

}

setInterval(printTime , 1000);