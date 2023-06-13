let counter =1;
function printcounter()
{
    console.clear();
    console.log(counter++);
    setTimeout(printcounter,1000);
}
printcounter();