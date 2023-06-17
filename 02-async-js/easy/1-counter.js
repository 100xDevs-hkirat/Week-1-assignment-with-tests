function counter(){
    var co=0;
    setInterval(()=>{
        co++;
        console.log(co);
    },1000);
}

counter();
module.exports = counter;