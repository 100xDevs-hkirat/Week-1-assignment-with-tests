/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to this.list of todos
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
    this.list = [];
  }

  #validIndex(idx) {
    return idx < this.list.length && idx >= 0;
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(idx) {
    this.list.splice(idx, 1);
  }

  update(idx, newTodo) {
    this.#validIndex(idx) && this.list.splice(idx, 1, newTodo);
  }

  getAll() {
    return this.list;
  }

  get(idx) {
    return this.#validIndex(idx) ? this.list[idx] : null;
  }

  clear() {
    this.list = [];
  }
}

//Trying functional equivalent for better understanding, ignore comments (for personal reference)

// function Todo() {
//   let list = [];

//   function validIndex(idx) {
//     return idx < list.length && idx >= 0;
//   }

//   function add(todo) {
//     list.push(todo);
//   }

//   function remove(idx) {
//     list.splice(idx, 1);
//   }

//   function update(idx, newTodo) {
//     validIndex(idx) && list.splice(idx, 1, newTodo);
//   }

//   function getAll() {
//     return list;
//   }

//   function get(idx) {
//     return validIndex(idx) ? list[idx] : null;
//   }

//   function clear() {
//     list = [];
//   }

//   return { add, remove, update, get, getAll, clear };
// }

module.exports = Todo;
