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
    this.arr = new Array();
  }

  add(todo) {
    this.arr.push(todo);
  }

  remove(index) {
    for (let i = index; i < this.arr.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
  }

  update(index, updatedTodo) {
    if (index >= this.arr.length) {
      return;
    } else {
      this.arr[index] = updatedTodo;
    }
  }

  getAll() {
    return this.arr;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.arr.length) {
      return null;
    } else {
      return this.arr[indexOfTodo];
    }
  }

  clear() {
    this.arr = new Array();
  }
}

module.exports = Todo;
