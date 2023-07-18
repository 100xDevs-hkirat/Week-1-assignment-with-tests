
var counter =0;
function displayCounter(){
    console.clear();
    console.log(counter);
    counter++;
}
setInterval(displayCounter,1000);