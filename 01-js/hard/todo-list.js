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
  all = [];
  add(todo) {
    (this.all).push(todo);
  }
  remove(indexOfTodo) {
    if(indexOfTodo>=this.all.length)
    {
      return null;
    }
    this.all.splice(indexOfTodo, 1);
  }
  update(index , updatedTodo) {
    if(index>=this.all.length)
    {
      return null;
    }
    this.all[index]=updatedTodo;
  }
  getAll() {
    return this.all;
  }
  get(indexOfTodo) {
    if(indexOfTodo>=this.all.length)
    {
      return null;
    }
    return this.all[indexOfTodo];
  }
  clear() {
    this.all = [];
  }
}

module.exports = Todo;
