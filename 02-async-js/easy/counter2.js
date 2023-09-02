setTimeout(counter,1000);
var counter1 =1;
function counter(){
    console.log(counter1);
    counter1++;
    setTimeout(counter,1000);
}