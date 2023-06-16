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
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {

    if (index >= this.todoList.length) {
      return;
    }
    this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length) {
      return null;
    }
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList = [];
  }

}

module.exports = Todo;

let todoList = new Todo;
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
todoList.add('Task 4');
todoList.add('Task 5');
todoList.add('Task 6');


console.log(todoList.getAll());

todoList.remove(2);
console.log(todoList.getAll());

todoList.update(0, 'Task 100');
console.log(todoList.getAll());
