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
    this.todo = [];
  }

  isValidPosition(index){
    return index >= 0 && this.todo[index] != undefined;
  }
  add(todo){
    this.todo.push(todo);
  }

  remove(index){
    if(!this.isValidPosition(index)) return;
    this.todo.splice(index,1);
  }

  update(index,todo){
    if(!this.isValidPosition(index)) return;
    this.todo[index] = todo;
  }

  getAll(){
    return this.todo;
  }

  get(index){
    if(!this.isValidPosition(index)) return null;
    return this.todo[index];
  }

  clear(){
    this.todo = [];
  }

}

module.exports = Todo;
