let counter =1
function printCounter()
{
    console.clear();
    console.log(counter);
    counter =counter+1;
}
setInterval(printCounter,1000);