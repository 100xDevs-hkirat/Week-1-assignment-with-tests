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
    this.todo = [];
  }
  invalid(index) {
    if (this.todo[index] === undefined) {

      return false
    }
    else return true
  }

  add(todo) { this.todo.push(todo); }
  remove(index) {
    if (this.invalid(index)) {
      this.todo.splice(index, 1)
    }
  }
  update(index, updated) {
    if (this.invalid(index)) {
      this.todo[index]=updated
    }

  }
  getAll(){
    return this.todo;
  }
  get(index){
  if (this.invalid(index)) {
    return this.todo[index]
  }else return null

  }
  clear(){this.todo=[]}


}

module.exports = Todo;
