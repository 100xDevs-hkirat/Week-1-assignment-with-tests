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
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
    return this.todoList;
  }
  getAll() {
    return this.todoList;
  }
  remove(index) {
    if (index >= 0 && index <= this.todoList.length) {
      return this.todoList.splice(index, 1);
    }
  }
  clear() {
    this.todoList.length = 0;
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      // return this.todoList.splice(index, 0, updatedTodo);
      return this.todoList[index] = updatedTodo
    }
    return null
  }
  get(index){
    if (index >= 0 && index < this.todoList.length) {
      return this.todoList[index];
    }
    return null
  }
}

module.exports = Todo;
