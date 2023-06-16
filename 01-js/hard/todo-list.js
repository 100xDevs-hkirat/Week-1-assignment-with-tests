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

  remove(index) {
    if (index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  update(index, updatedTodo) {
    if (index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    if (this.todos.length > 0) {
      return this.todos;
    }
    return [];
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
    
  }

  clear() {
    this.todos = [];
    
  }
}

todoList = new Todo();

todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

todoList.update(1, "Updated Task 2");

console.log(todoList.get(1));

module.exports = Todo;
