function counter(){
    var co = 0;
    let timerId = setTimeout(
        counterInc = ()=>{
           co++;
           console.log(co);     
           setTimeout(counterInc,1000)
        },1000
    )   
}
counter();

module.exports = counter;