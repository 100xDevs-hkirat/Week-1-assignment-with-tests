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
  add = function (todo) {
    this.todos.push(todo);
  };
  remove = function (index) {
    this.todos.splice(index, 1);
  };
  update = function (index, updatedTodo) {
    if (!this.todos[index]) return;
    this.todos[index] = updatedTodo;
  };
  getAll = function () {
    return this.todos;
  };
  get = function (index) {
    if (!this.todos[index]) return null;
    return this.todos[index];
  };
  clear = function () {
    this.todos = [];
  };
}

module.exports = Todo;
