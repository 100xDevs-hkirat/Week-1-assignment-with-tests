class Todo {
  constructor() {
    this.todos = [];
  }

  add(todoItem) {
    this.todos.push(todoItem);
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
