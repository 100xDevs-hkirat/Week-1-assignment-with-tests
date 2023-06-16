let counter = 0;

function increamentcounter(){
    console.clear()
    counter++;
    console.log(counter)
    setTimeout(increamentcounter,1000)
}
increamentcounter()
