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
    this.todo = [];
  }
  add(todo) {
    this.todo.push(todo);
  }
  remove(index) {
    if (index < 0 || index >= this.todo.length) {
      throw new Error("Invalid Remove!");
    }
    this.todo.splice(index, 1);
  }
  updata(index, updatedTodo) {
    if (index < 0 || index >= this.todo.length) {
      throw new Error("Invalid Update!");
    }
    this.todo[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(index) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error("Invalid index");
    }
    return this.todos[index];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
