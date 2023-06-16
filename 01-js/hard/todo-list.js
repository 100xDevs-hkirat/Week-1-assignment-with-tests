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
  // Initial configuration
  constructor() {
    this.todos = []
  }

  add(item) {
    this.todos.push(item)
  }

  remove(itemId) {
    this.todos.splice(itemId, 1)
  }

  update(itemId, item) {
    // Handling out of bound indexes
    if (itemId < 0) {
      return null
    }
    if (itemId >= this.todos.length) {
      return null
    }
    this.todos[itemId] = item
  }

  getAll() {
    return this.todos
  }

  get(itemId) {
    // Handling out of bound indexes
    if (itemId < 0) {
      return null
    }
    if (itemId >= this.todos.length) {
      return null
    }
    return this.todos[itemId]
  }

  clear() {
    this.todos = []
  }
}

module.exports = Todo
