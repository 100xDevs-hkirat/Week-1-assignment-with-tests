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
    this.result = []
  }

  add(todo) {
    this.result.push(todo);
  }

  remove(indexOfTodo) {
    this.result = this.result.filter((data, index) => (
      index !== indexOfTodo
    ))
  }

  getAll() {
    return this.result
  }

  update(index, updatedTodo) {
    this.result.map((data, i) => {
      if (i !== index) return data
      else return this.result[index] = updatedTodo
    }
    )
  }

  clear() {
    this.result = []
  }

  get(indexOfTodo) {
    return this.result[indexOfTodo] !== undefined ? this.result[indexOfTodo] : null
  }


}

module.exports = Todo;
