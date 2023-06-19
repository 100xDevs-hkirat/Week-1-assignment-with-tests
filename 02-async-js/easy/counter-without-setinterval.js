function counterFunction(counter){
    console.log(counter);
    setTimeout(()=>{
        counterFunction(counter+1);
    },1000);
}
let counter=0;
counterFunction(counter+1);
