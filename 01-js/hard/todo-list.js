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
  #todoList = [];
  #validIndex(idx) {
    return idx < this.#todoList.length && idx >= 0;
  }
  add(todo) {
    this.#todoList.push(todo);
  }
  remove(indexOfTodo) {
    this.#validIndex(indexOfTodo) && this.#todoList.splice(indexOfTodo, 1);
  }
  update(indexOfTodo, updatedTodo) {
    this.#validIndex(indexOfTodo) &&
      this.#todoList.splice(indexOfTodo, 1, updatedTodo);
  }
  getAll() {
    return this.#todoList;
  }
  get(indexOfTodo) {
    return this.#validIndex(indexOfTodo) ? this.#todoList[indexOfTodo] : null;
  }
  clear() {
    this.#todoList = [];
  }

}

module.exports = Todo;
