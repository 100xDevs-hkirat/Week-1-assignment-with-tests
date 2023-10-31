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
    this.todol = [];
  }
  add(task) {
    this.todol.push(task);
  }
  getAll() {
    return this.todol;
  }
  remove(number) {
    this.todol.splice(number, 1);
  }
  update(numtask, taskk) {
    if (numtask >= this.todol.length) {
      return this.todol;
    }
    this.todol[numtask] = taskk;
    return this.todol;
  }
  get(numtask) {
    if (numtask >= this.todol.length) {
      return null;
    }
    return this.todol[numtask];
  }
  clear() {
    this.todol = [];
    return this.todol;
  }
}

module.exports = Todo;
