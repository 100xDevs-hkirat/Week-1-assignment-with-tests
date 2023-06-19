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

const DEFAULT_RETURN = null;

class Todo {
  constructor() {
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(index) {
    let size = this.list.length;

    if (index < size) {
      this.list.splice(index, 1);
    }
  }

  update(index, newTodo) {
    let size = this.list.length;

    if (index < size) {
      this.list[index] = newTodo;
    }
  }

  getAll() {
    return this.list;
  }

  get(index) {
    let size = this.list.length;

    if (index < size) {
      return this.list[index];
    }

    return DEFAULT_RETURN;
  }

  clear() {
    this.list = [];
  }
}

todoList = new Todo();

todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

todoList.update(1, 'Updated Task 2');
todoList.update(3, 'Invalid Task')
console.log('get updated index', todoList.get(1));
console.log('return all', todoList.getAll());

module.exports = Todo;
