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
  constructor(){
    this.tasks=[];
  }
  add(todo){
    this.tasks.push(todo)
  }
  remove(index){
    if (index < this.tasks.length){
      this.tasks.splice(index,1)
    }
  }
  update(index,todo){
    if (index < this.tasks.length){
      this.tasks[index]=todo;
    }
  }
  getAll(){
    return this.tasks;
  }
  get(index){
    if(this.tasks[index]!==undefined){
      return this.tasks[index];
    }
    else{
      return null;
    }
  }
  clear(){
    this.tasks.length=0;
  }

}

module.exports = Todo;
