/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  listoftodos=[]
 add=(todo)=>{this.listoftodos.push(todo)}
 remove=(indexOftodo)=>{if(indexOftodo<this.listoftodos.length)this.listoftodos.splice(indexOftodo,1)}
 update=(index,updatedtodo)=>{if(index<this.listoftodos.length)this.listoftodos[index]=updatedtodo}
 getAll=()=>{return this.listoftodos}
 get=(indexOftodo)=>{
  var x=this.listoftodos[indexOftodo];
  if(x)
  return x;
  else
  return null;
}
 clear=()=>{this.listoftodos=[]}
}

module.exports = Todo;
