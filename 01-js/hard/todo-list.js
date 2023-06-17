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
  toDos = [];
  Todo() { };
  add(toDo) {
    this.toDos.push(toDo);
  }
  remove(indexOfTodo){
    this.toDos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index >= this.toDos.length) return;
    this.toDos[index] = updatedTodo;
  }
  getAll() {
    return this.toDos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.toDos.length) return null;
    return this.toDos[indexOfTodo];
  }
  clear(indexOfTodo) {
    this.toDos.splice(0, this.toDos.length);
  }
}

module.exports = Todo;