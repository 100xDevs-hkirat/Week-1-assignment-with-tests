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
    this.listOfTodos = [];
  }
  add(todo) {
    this.listOfTodos.push(todo);
  }
  remove(indexOfTodo) {
    this.listOfTodos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    this.listOfTodos[index] = updatedTodo;
  }
  getAll() {
    return this.listOfTodos;
  }
  get(indexOfTodo) {
    return this.listOfTodos[indexOfTodo];
  }
  clear() {
    this.listOfTodos=[];
  }
}

var todoList = new Todo();
todoList.add("Task 1");
todoList.add("Task 2");
todoList.remove(5);
console.log(todoList.getAll());
todoList.update(3, "Updated Task");
console.log(todoList.getAll());

module.exports = Todo;
