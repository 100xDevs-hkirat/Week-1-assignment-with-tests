var EndTime= new Date();
console.log(EndTime.getHours()+":"+EndTime.getMinutes()+"::"+EndTime.getSeconds());
if(EndTime.getHours()>=12){
console.log(EndTime.getHours()%12+":"+EndTime.getMinutes()+"::"+EndTime.getSeconds()+" PM");

}
else{
console.log(EndTime.getHours()%12+":"+EndTime.getMinutes()+"::"+EndTime.getSeconds()+"AM");

}