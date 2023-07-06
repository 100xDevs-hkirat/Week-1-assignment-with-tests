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

  add(todo) {
    this.todos.push(todo)
  }

  remove(index) {
    if (index > this.todos.length - 1) {
      return
    }
    for (let i = index + 1; i < this.todos.length; i++) {
      this.todos[i - 1] = this.todos[i]
    }
    this.todos.pop()
  }

  update(index, todo) {
    if (index > this.todos.length - 1) {
      return
    }
    this.todos[index] = todo
  }

  getAll() {
    return this.todos
  }

  get(index) {
    if (index > this.todos.length - 1) {
      return null
    }
    return this.todos[index]
  }

  clear() {
    this.todos = []
  }
}

module.exports = Todo;
