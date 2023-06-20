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
  constructor(){
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

const todoList = new Todo();
todoList.add('Buy groceries');
todoList.add('Finish homework');
todoList.add('Call friend');

console.log(todoList.getAll());  // Output: ['Buy groceries', 'Finish homework', 'Call friend']

todoList.update(1, 'Complete assignment');
console.log(todoList.get(1));  // Output: 'Complete assignment'

todoList.remove(2);
console.log(todoList.getAll());  // Output: ['Buy groceries', 'Complete assignment']

todoList.clear();
console.log(todoList.getAll()); 
module.exports = Todo;
