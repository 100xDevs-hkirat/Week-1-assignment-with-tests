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
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
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

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

// Example usage
// const myTodos = new Todo();
// myTodos.add('Buy groceries');
// myTodos.add('Go to the gym');
// myTodos.add('Read a book');

// console.log('Initial todos:', myTodos.getAll());

// myTodos.update(1, 'Go for a run');
// console.log('Updated todos:', myTodos.getAll());

// myTodos.remove(0);
// console.log('Todos after removal:', myTodos.getAll());

// console.log('Todo at index 0:', myTodos.get(0));

// myTodos.clear();
// console.log('Todos after clearing:', myTodos.getAll());

module.exports = Todo;
