function updatetime1(){
var x= new Date().toLocaleTimeString()
console.log(x)
}
function updatetime2(){
var x= new Date().toLocaleTimeString('en-US',{hour12:false})
console.log(x)
}
function clearconsole()
    {console.clear();}
function displaytime(){
    clearconsole();
    updatetime1();
    updatetime2();
}
setInterval(displaytime,1000);