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
  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= this.todos.length) return;
    this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index >= this.todos.length) return;
    this.todos[index] = updatedTodo;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length) return null;
    return this.todos[indexOfTodo];
  }
  getAll() {
    return this.todos;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
