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
    this.todos = [];
  }
  add(task){
    this.todos.push(task);
  }
  remove(taskIndex){
    if(taskIndex>=this.todos.length||taskIndex<0)
      return;
    this.todos.splice(taskIndex,1);
  }
  update(index, updatedTodo){
    if(index>=this.todos.length || index < 0)
      return;
    this.todos[index] = updatedTodo;
  }
  getAll (){
    return this.todos;
  }
  get(index){
    if(index>=this.todos.length || index < 0)
      return null;
    return this.todos[index];
  }
  clear(){
    this.todos.splice(0);
  }
}

module.exports = Todo;
