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
    this.arr = [];  //initilize with an empty array
  }

  add(task) {
    this.arr.push(task);
  }

  remove(indexOfTask) {
    if (indexOfTask > this.arr.length) {
      console.log("Invalid index");
      return null;
    } else {
      for (var i = indexOfTask; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i + 1];
      }
      this.arr.length = this.arr.length - 1;
    }
  }

  update(index, updatedTask) {
    if (index > this.arr.length - 1) {
      console.log("Invalid index");
      return null;
    } else {
      this.arr[index] = updatedTask;
    }
  }

  getAll() {
    return this.arr;
  }

  get(indexOfTask) {
    if (indexOfTask > this.arr.length - 1) {
      console.log("invalid index");
      return null;
    }
    return this.arr[indexOfTask];
  }

  clear() {
    this.arr = [];
  }

}

module.exports = Todo;
