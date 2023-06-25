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
  constructor() {
   this.todo = []
  }

  add(task){
    this.todo.push(task);
  }

  remove(indexOfTodo){
   let newTodo = []
    for(let i=0; i< this.todo.length ; i++){
     if(i == indexOfTodo){
       continue
     }

     newTodo.push(this.todo[i])
    }

    this.todo = newTodo;
  }

  update(index, updatedTodo){

   if(index < this.todo.length){
     this.todo[index] = updatedTodo;
   }

   
  }

  getAll(){
     return this.todo;
  }

  get(indexOfTodo){
     if(indexOfTodo < this.todo.length)
       return this.todo[indexOfTodo];

     return null
  }

  clear(){
   this.todo = []
  }


}

module.exports = Todo;

