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
    this.result = [];
  }

  add(todo) {
    this.result.push(todo);
  }

  remove(indexOfTodo) {
    this.result.splice(indexOfTodo,1);
  }

  update(indexOfTodo, updatedTodo) {
    if(indexOfTodo < (this.result.length -1 )) {
      this.result.splice(indexOfTodo, 1, updatedTodo);
    }
  }

  getAll() {
    return this.result;
  }

  get(indexOfTodo) {
    if(indexOfTodo > (this.result.length -1 )) {
      return null
    }
    return this.result.at(indexOfTodo);
  }

  clear() {
    this.result = [];
  }
}

module.exports = Todo;
