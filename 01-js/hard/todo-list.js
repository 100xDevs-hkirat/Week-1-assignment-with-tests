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

    const newResult = this.result.filter((data, index) => {
      if (index !== indexOfTodo) return data;
    })

    this.result = newResult;
  }


  update(index, updatedTodo) {
    if (index < this.result.length)
      this.result[index] = updatedTodo;
  }

  getAll() {
    return this.result;
  }

  get(indexOfTodo) {
    if (indexOfTodo + 1 > this.result.length) return null;
    return this.result[indexOfTodo];
  }

  clear() {
    this.result = [];
  }
}

module.exports = Todo;
