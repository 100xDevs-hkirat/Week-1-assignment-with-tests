var x=0;
function printtime(){
    setTimeout(()=>{console.log(x++);printtime();},1000)    
}
printtime();
