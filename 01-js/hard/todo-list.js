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
  todo = [];

  add = (obj) => {
    this.todo.push(obj);
  };
  remove = (idx) => {
    if (idx < 0 || idx >= this.todo.length) {
      return;
    }
    this.todo.splice(idx, 1);
  };
  update = (idx, newTodo) => {
    if (idx < 0 || idx >= this.todo.length) {
      return;
    }
    this.todo[idx] = newTodo;
  };
  get = (idx) => {
    if (idx < 0 || idx >= this.todo.length) {
      return null;
    }
    return this.todo[idx];
  };
  getAll = () => {
    return this.todo;
  };
  clear = () => {
    this.todo.splice(0);
  };
}

module.exports = Todo;
