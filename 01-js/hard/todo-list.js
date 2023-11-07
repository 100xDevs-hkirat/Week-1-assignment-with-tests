class Todo {
constructor(){
this.arr=[];
}
 add(todo){
this.arr.push(todo);
}
 remove(indexOfTodo){
  if(indexOfTodo>=this.arr.length)
  {
    console.log('invalid index');
    return null;
  }
  else{
// this.arr.splice(indexOfTodo,1);
for(var i=indexOfTodo; i<this.arr.length;i++){
this.arr[i]=this.arr[i+1];
}
this.arr.length=this.arr.length-1;
}
}
 update(index, updatedTodo){
  if(index>=this.arr.length)
  {
    console.log('invalid index');
    return null;
  }
  else
  this.arr[index]= updatedTodo;
}
getAll(){
return this.arr;
}
get(indexOfTodo){
  if(indexOfTodo>=this.arr.length)
  {
    console.log('invalid index');
    return null;
  }
return this.arr[indexOfTodo];
}
clear()
{
  this.arr=[];
}}

module.exports = Todo;
