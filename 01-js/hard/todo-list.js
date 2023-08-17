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
    this.todos = []
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null
    }
    return this.todos[indexOfTodo]
  }
  add(todo) {
    this.todos.push(todo)
  }

  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null
    }
    this.todos.splice(indexOfTodo, 1)
  }
  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null
    }
    this.todos[indexOfTodo] = updatedTodo
  }
  getAll() {
    return this.todos
  }

  clear() {
    this.todos = []
  }
}

module.exports = Todo
