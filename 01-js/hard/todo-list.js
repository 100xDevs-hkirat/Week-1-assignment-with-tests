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

  todos = [];

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    this.todos = this.todos.slice(0,indexOfTodo).concat(this.todos.slice(indexOfTodo+1));
  }

  update(index, updatedTodo){
    // this.todos[index] = updatedTodo;
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    // return this.todos[indexOfTodo];
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear(){
    this.todos = []
  }
}

module.exports = Todo;
