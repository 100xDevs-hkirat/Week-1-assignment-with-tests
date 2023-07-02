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
  }

  remove(indexOfTodo) {
    if (!(this.todoList.length - 1 < indexOfTodo)) {
      if (this.todoList.length - 1 == 0 || indexOfTodo == this.todoList.length - 1) {
        this.todoList.pop();
      }
      else {
        for (let i = indexOfTodo; i < this.todoList.length - 1; i++) {
          this.todoList[i] = this.todoList[i + 1];
        }
        this.todoList.pop();
      }
    }
  }


  update(index, updatedTodo) {
    if (!(index > this.todoList.length - 1)) {
      this.todoList[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (!(indexOfTodo > this.todoList.length - 1)) {
      return this.todoList[indexOfTodo];
    }
    else {
      return null;
    }
  }

  clear() {
    this.todoList = [];
  }

}

module.exports = Todo;
